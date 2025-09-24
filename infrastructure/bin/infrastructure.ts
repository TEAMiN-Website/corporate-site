#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Configuration, getConfiguration } from '../common/configuration';
import { HostingStack } from '../bucket/hosting';
import * as assert from 'assert';

const qualifier = process.env.CDK_QUALIFIER;

assert(qualifier, 'CDK_QUALIFIER environment variable is required');

const app = new cdk.App();

const configuration: Configuration = getConfiguration(app);
const stackNamePrefix = `${configuration.Environment}${configuration.ApplicationCode}`;

cdk.Tags.of(app).add('App', configuration.ApplicationName);
cdk.Tags.of(app).add('Env', configuration.Environment);
cdk.Tags.of(app).add(
  'use',
  `${configuration.Environment}-${configuration.ApplicationCode}`
);

const env: cdk.Environment = {
  account: configuration.Account,
  region: configuration.Region,
};

new HostingStack(app, `${stackNamePrefix}HostingStack`, configuration, {
  env,
  synthesizer: new cdk.DefaultStackSynthesizer({
    qualifier,
  }),
  description: `${configuration.ApplicationName} Assets Infra Stack`,
});
