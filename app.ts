// Dependencies
import Express from 'express';
const healthRoute = require('./Routes/health.routes');

// Create Express application
const app = Express()

/* 
	Mount specified middleware function at specified path. 
	The middleware function is executed when the base of the
	requested path matches this path.
*/
app.use('/health', healthRoute)

app.listen(3000);