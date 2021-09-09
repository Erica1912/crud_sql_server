import { Router } from "express";
import {getUsuario} from '../controllers/UsuarioControllers'
const router = Router();

router.get('/usuario', getUsuario);

router.post('/usuario', getUsuario);

router.get('/usuario', getUsuario);

router.delete('/usuario', getUsuario);

router.put('/usuario', getUsuario);






export default router