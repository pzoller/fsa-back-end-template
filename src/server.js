import express from "express";
import { routes } from "./routes"
import { db } from './db';

const app = express();
app.use(express.json());//Parses request body
const portNo = 8043;
const MongoDbPortNo = 27017;

routes.forEach(route => {
	app[route.method](route.path, route.handler);
})

const start = async () => {
	await db.connect(`mongodb://localhost:${MongoDbPortNo}`);
	app.listen(portNo);
	console.log('Server is listening on port ' + portNo);
}

start();