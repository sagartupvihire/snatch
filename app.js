
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongoose.connection")
app.use(express.json());
app.use(express.urlencoded(
   { extended :true}
));

const ownersRouter = require("./routes/ownersRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productRouter);
app.get("/",(req, res)=>{
   res.send("hey")
})
app.listen(3000);
