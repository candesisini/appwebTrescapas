const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productoController');

router.post('/', ctrl.crear);
router.get('/', ctrl.listar);
router.get('/:id', ctrl.obtener);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

module.exports = router;
