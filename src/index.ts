import express from "express";
import path from "path";
import helmet from "helmet";
import session from "express-session";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import booksRouter from "./routes/books";
import coursesRouter from "./routes/courses";
import playGroundRouter from "./routes/playground";

const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 3000;

// Create a Redis session store
// let redisStore = new RedisStore({
//   client: redisClient,
//   prefix: "myapp:",
// })

// Set the view engine to 'pug'
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Configure session middleware
app.use(
  session({
    secret: "your-session-secret", // Replace with your session secret
    resave: false, // Prevents saving session if unmodified
    saveUninitialized: false, // Prevents saving empty sessions
    cookie: {
      secure: false, // Set true if using HTTPS
      httpOnly: true, // Prevents JavaScript access to cookies
      maxAge: 1000 * 60 * 10, // Session expiration in milliseconds (10 minutes)
    },
  })
);

app.use(cookieParser());
app.use(helmet());

// Create a rate limiter middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

// Apply the rate limiter to the specific route
app.get("/api/login", limiter, (req, res) => {
  // Your login logic here
  res.send("API");
});
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use("/users", usersRouter);
app.use("/courses", coursesRouter);
app.use("/books", booksRouter);
app.use("/playground", playGroundRouter);

app.get("/", (req, res) => {
  res.send("Hello from TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
