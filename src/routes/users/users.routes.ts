import express from "express";
import { createUserController } from "../../controllers/users/createUser.controller";
import { listUsersController } from "../../controllers/users/listUsers.controller";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import { userCreateRequestSerializer } from "../../serializers/users/user.serializer";
import { ensureIsAdminMiddleware } from "../../middlewares/ensureIsAdmin.middleware";
import { ensureAuthMiddleware } from "../../middlewares/ensureAuth.middleware";
import { ensureUniqueFieldsMiddleware } from "../../middlewares/ensureUniqueFields.middleware";
import { retrieveUserController } from "../../controllers/users/retrieveUser.controller";
import { ensureIsAdminOrAccountOwnerMiddleware } from "../../middlewares/ensureIsAdminOrAccountOwner.middleware";
import { deleteUserController } from "../../controllers/users/deleteUser.controller";

export const userRoutes = express.Router();

userRoutes.post(
	"",
	ensureDataIsValidMiddleware(userCreateRequestSerializer),
	ensureUniqueFieldsMiddleware,
	createUserController
);
userRoutes.get("", ensureAuthMiddleware, retrieveUserController);
userRoutes.get("/all", ensureAuthMiddleware, ensureIsAdminMiddleware, listUsersController);
userRoutes.delete(
	"",
	ensureAuthMiddleware,
	ensureIsAdminOrAccountOwnerMiddleware,
	deleteUserController
);
