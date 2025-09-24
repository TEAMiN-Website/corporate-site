import {
  Stack,
  StackProps,
  aws_s3,
  RemovalPolicy,
  aws_cloudfront,
  aws_cloudfront_origins,
  aws_certificatemanager,
  aws_s3_deployment,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Configuration } from '../common/configuration';

export class HostingStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    configuration: Configuration,
    props?: StackProps
  ) {
    super(scope, id, props);
    const stackNamePrefix = `${configuration.Environment}${configuration.ApplicationCode}`;

    const siteBucket = new aws_s3.Bucket(
      this,
      `${stackNamePrefix}HostingBucket`,
      {
        bucketName: configuration.StorageBucketName,
        accessControl: aws_s3.BucketAccessControl.PRIVATE,
        removalPolicy: RemovalPolicy.DESTROY,
      }
    );

    const certificate = aws_certificatemanager.Certificate.fromCertificateArn(
      this,
      `${stackNamePrefix}Certificate`,
      configuration.CertificateArn
    );

    const cfd = new aws_cloudfront.Distribution(
      this,
      `${stackNamePrefix}CFDistribution`,
      {
        defaultBehavior: {
          origin:
            aws_cloudfront_origins.S3BucketOrigin.withOriginAccessControl(
              siteBucket
            ),
        },
        domainNames: [configuration.DomainName],
        certificate: certificate,
        defaultRootObject: 'index.html',
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: '/index.html',
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: '/index.html',
          },
        ],
        httpVersion: aws_cloudfront.HttpVersion.HTTP2,
      }
    );

    new aws_s3_deployment.BucketDeployment(
      this,
      `${stackNamePrefix}Deployment`,
      {
        sources: [aws_s3_deployment.Source.asset('../dist')],
        destinationBucket: siteBucket,
        distribution: cfd,
        distributionPaths: ['/*'],
      }
    );
  }
}
