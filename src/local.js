import handler from "./app.js";
import * as dotenv from "dotenv";
dotenv.config();

handler(process.env.SFTP_KEY);
