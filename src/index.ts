import dotenv from "dotenv";
import type { Request, Response } from "express";
import express from "express";
import routes from "./routes";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.post("/ID/:id/Name/:name", (req: Request, res: Response) => {
	res.send({
		data: req.body,
		params: {
			id: req.params.id,
			name: req.params.name,
		},
	});
});

app.listen(process.env.PORT, () => {
	console.log(`The application is listening on port ${process.env.PORT}!`);
});
