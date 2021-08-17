interface AppConfig {
	app: {
		port: number
	},
	env: string
}

interface Config {
	[ index: string ]: AppConfig
}

const env: string = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";

// Dev env
const dev: AppConfig = {
	app: {
		port: process.env.DEV_PORT ? parseInt(process.env.DEV_PORT) : 3000
	},
	env: "dev"
}

// Test env
const test: AppConfig = {
	app: {
		port: process.env.TEST_PORT ? parseInt(process.env.TEST_PORT) : 3001
	},
	env: "test"
}

// Config options
const config: Config = {
	dev,
	test
}

// Select config based on env
const appConfig = config[env];

export { appConfig };