import {devConfig} from '../config/dev.config'
import {qaConfig} from '../config/qa.config'

const environment = process.env.ENV || 'qa';

const configs = {
    dev: devConfig,
    qa: qaConfig
};

if (!configs[environment as keyof typeof configs]) {
    throw new Error(`Invalid environment: ${environment}`);
}

export const config = configs[environment as keyof typeof configs];