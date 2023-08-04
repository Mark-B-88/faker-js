const express = require("express");
const app = express();
const { port } = require("./config/config");
// Routes
const testRoute = require("./routes/test");
const employeesRoute = require("./routes/employees");

app.use("/api/v1", testRoute);
app.use("/api/v1", employeesRoute);

app.listen(port, () => console.log(`listening on port ${port}`));
