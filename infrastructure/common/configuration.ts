import * as cdk from 'aws-cdk-lib';

interface Configuration {
  readonly Account: string;
  readonly Region: string;
  readonly ApplicationName: string;
  readonly ApplicationCode: string;
  readonly Environment: string;
  readonly StorageBucketName: string;
  readonly DomainName: string;
  readonly CertificateArn: string;
}

const getStringValue = (config: any, key: string): string => {
  if (!config[key] || config[key].trim().length === 0) {
    throw new Error(key + ' does not exist or it is empty in config');
  }

  return config[key];
};
const getStringArrayValue = (config: any, key: string): string[] => {
  if (!config[key] || !Array.isArray(config[key]) || config[key].length === 0) {
    throw new Error(
      key + ' does not exist or it is not a non-empty array in config'
    );
  }

  return config[key];
};

const getConfiguration = (app: cdk.App): Configuration => {
  const env = app.node.tryGetContext('config');
  if (!env) {
    throw new Error(
      'Context variable missing on CDK command. Pass in as "-c config=env"'
    );
  }

  const configuration: any = app.node.tryGetContext(env);

  if (!configuration) {
    throw new Error(
      'Wrong Context variable passed on CDK command. Pass in as "-c config=env"'
    );
  }

  const validBuildConfig: Configuration = {
    Account: getStringValue(configuration, 'Account'),
    Region: getStringValue(configuration, 'Region'),
    ApplicationName: getStringValue(configuration, 'ApplicationName'),
    ApplicationCode: getStringValue(configuration, 'ApplicationCode'),
    Environment: getStringValue(configuration, 'Environment'),
    StorageBucketName: getStringValue(configuration, 'StorageBucketName'),
    DomainName: getStringValue(configuration, 'DomainName'),
    CertificateArn: getStringValue(configuration, 'CertificateArn'),
  };

  return validBuildConfig;
};

export { Configuration, getConfiguration };
