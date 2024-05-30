import { Router } from 'express';
import { createForm, fillData, getAllData } from '../controllers/formController';

const router = Router();

router.post('/form', createForm);
router.post('/fill_data', fillData);
router.get('/fill_data', getAllData);

export default router;
