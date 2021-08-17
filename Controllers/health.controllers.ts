import {Request, Response} from 'express';
import {appConfig} from '../Config/config';

const healthResponse = {
	version: process.env.npm_package_version,
	env: appConfig.env,
	status: 'up',
}

function healthResource(req: Request, res: Response) {
	res.status(200);
	res.json(healthResponse);
}

export {
	healthResource
}

// module.exports = {healthResource, ... } // if more than 1 resource