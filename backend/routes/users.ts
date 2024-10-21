import Router from "@koa/router";
import { Role, User } from "../../api-types";
import { add, edit, getUserByRole, index, remove, view } from "../services/user";

const router = new Router({
    prefix: "/teachers",
});

// All routes
router.get("/", (ctx) => {
    ctx.body = index();
});

router.get("/role/:role", (ctx) => {
    ctx.body = getUserByRole(ctx.params.role as Role)
})

// Find a teacher
router.get("/:id" , (ctx) =>{
    ctx.body = view(ctx.params.id);
});

// Add a teacher
router.post("/" , (ctx) =>{
    ctx.accepts("json");
    add(ctx.request.body as User);
    ctx.response.body = ctx.request.body;
});

// Find a teacher
router.put("/:id" , (ctx) =>{
    ctx.accepts("json");
    edit(ctx.request.body as User);
    ctx.response.body = ctx.request.body;
});

// Delete a teacher
router.delete("/:id" , (ctx) =>{
    ctx.body = remove(ctx.params.id);
});

export default router;
