import {Request, Response} from 'express';
import {appConfig} from '../Config/config';

const healthResponse = {
	version: process.env.npm_package_version,
	env: appConfig.env,
	status: 'up',
}

const healthResource = (req: Request, res: Response) => {
	res.status(200);
	res.send(healthResponse);
}

module.exports = healthResource;

// module.exports = {healthResource, ... } // if more than 1 resource