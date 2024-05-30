"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllData = exports.fillData = exports.createForm = void 0;
const typeorm_1 = require("typeorm");
const Form_1 = require("../entity/Form");
const FormData_1 = require("../entity/FormData");
const class_validator_1 = require("class-validator");
const createForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formRepository = (0, typeorm_1.getRepository)(Form_1.Form);
    const form = formRepository.create(req.body);
    try {
        const errors = yield (0, class_validator_1.validate)(form);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        yield formRepository.save(form);
        res.status(201).send(form);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.createForm = createForm;
const fillData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formRepository = (0, typeorm_1.getRepository)(Form_1.Form);
    const formDataRepository = (0, typeorm_1.getRepository)(FormData_1.FormData);
    try {
        const form = yield formRepository.findOne({ where: { title: req.query.form_title } });
        if (!form) {
            return res.status(404).json({ message: 'Form not found' });
        }
        const formData = formDataRepository.create(Object.assign(Object.assign({}, req.body), { form }));
        yield formDataRepository.save(formData);
        res.status(201).send(formData);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.fillData = fillData;
const getAllData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formDataRepository = (0, typeorm_1.getRepository)(FormData_1.FormData);
    try {
        const formData = yield formDataRepository.find({ relations: ['form'], where: { form: { title: req.query.form_title } } });
        res.status(200).send(formData);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getAllData = getAllData;
