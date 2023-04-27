const express = require("express");
const v1Router = require("./v1/routes");
const v1WorkoutRoutes = require("./v1/routes/workoutRoutes");
const bodyParser = require("body-parser");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const apicache = require("apicache");

const app = express();
// const cache = apicache.middleware;
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
// app.use(cache("2 minutes"));
app.use("/api/v1", v1Router);

app.use("/api/v1/workouts", v1WorkoutRoutes);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
