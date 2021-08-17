// Dependencies
import Express from 'express';
import { healthRouter } from './Routes/health.routes';

const PORT = 3000;
// Create Express application
const app = Express();

/* 
	Mount specified middleware function at specified path. 
	The middleware function is executed when the base of the
	requested path matches this path.
*/
app.use('/health', healthRouter);

app.listen(PORT, () => {
	console.log(`app listetning on http://localhost:${PORT}`);
});