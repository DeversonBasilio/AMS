"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiController_1 = __importDefault(require("../controllers/apiController"));
const router = express_1.default.Router();
router.get('/api', async (_req, res) => {
    const apiController = new apiController_1.default();
    const response = await apiController.getMessage();
    res.send(response);
});
exports.default = router;
//# sourceMappingURL=index.js.map