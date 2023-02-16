import  express  from "express";
import commentsRouter from "./comments.routes.js";
import postRouter from "./post.routes.js";
import usersRouter from "./user.routes.js";

const indexRouter = express.Router()

indexRouter.use("/post", postRouter )
indexRouter.use("/comment", commentsRouter )
indexRouter.use("/users", usersRouter)

export default indexRouter