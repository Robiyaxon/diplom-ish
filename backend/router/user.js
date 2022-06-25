const router = require("express").Router();
const UserController = require("../controllers/UserControllers");

router.post("/create", UserController.register);
router.post("/login", UserController.loginClient);
router.post("/admin/login", UserController.loginAdmin);
router.post("/seller/login", UserController.loginCeller);
router.get("/all", UserController.getUsers);
router.get("/me", UserController.me);
router.delete("/:id", UserController.delete);
module.exports = router;
