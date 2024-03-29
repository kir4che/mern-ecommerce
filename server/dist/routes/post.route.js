"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const router = (0, express_1.Router)();
exports.postRouter = router;
router.route('/').get(post_controller_1.getPost);
router.route('/:id').get(post_controller_1.getPostById);
router.route('/').post(post_controller_1.addPost);
router.route('/:id').patch(post_controller_1.updatePost);
router.route('/:id').delete(post_controller_1.deletePostById);
//# sourceMappingURL=post.route.js.map