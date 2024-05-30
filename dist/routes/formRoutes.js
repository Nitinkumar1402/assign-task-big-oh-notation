"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formController_1 = require("../controllers/formController");
const router = (0, express_1.Router)();
router.post('/form', formController_1.createForm);
router.post('/fill_data', formController_1.fillData);
router.get('/fill_data', formController_1.getAllData);
exports.default = router;
