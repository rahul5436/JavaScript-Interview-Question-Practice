import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import hpp from "hpp";
import multer from "multer";
import homerouters from '../routers/homerouter.js'

const app = express();

// Multer
const upload = multer({ dest: "uploads/" });

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(hpp());

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Secure Express ES6 App!");
});


app.use("/home",homerouters)

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({ message: "File uploaded successfully", file: req.file });
});

export default app;
