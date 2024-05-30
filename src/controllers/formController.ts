import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Form } from '../entity/Form';
import { FormData } from '../entity/FormData';
import { validate } from 'class-validator';

export const createForm = async (req: Request, res: Response) => {
  const formRepository = getRepository(Form);
  const form = formRepository.create(req.body);

  try {
    const errors = await validate(form);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }
    await formRepository.save(form);
    res.status(201).send(form);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const fillData = async (req: Request, res: Response) => {
  const formRepository = getRepository(Form);
  const formDataRepository = getRepository(FormData);

  try {
    const form = await formRepository.findOne({ where: { title: req.query.form_title as string } });
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    const formData = formDataRepository.create({ ...req.body, form });
    await formDataRepository.save(formData);
    res.status(201).send(formData);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllData = async (req: Request, res: Response) => {
  const formDataRepository = getRepository(FormData);

  try {
    const formData = await formDataRepository.find({ relations: ['form'], where: { form: { title: req.query.form_title as string } } });
    res.status(200).send(formData);
  } catch (error) {
    res.status(500).send(error);
  }
};
