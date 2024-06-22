const {Router} = require('express');
const router= Router();
const { consultarMineral,consultarMinerales,agregarMineral,eliminarMineral,actualizarMineral,consultarProyecto,consultarProyectos,agregarProyecto,
    eliminarProyecto,actualizarProyecto,consultarEtapa,consultarEtapas,agregarEtapa,eliminarEtapa,actualizarEtapa,consultarActividad,
    consultarActividades,agregarActividad,eliminarActividad,actualizarActividad
}= require('../controllers/tasks.controllers')

router.get('/minerales',consultarMinerales);
router.get('/mineral/:id_mineral',consultarMineral);
router.post('/mineral', agregarMineral);
router.delete('/mineral/:id_mineral',eliminarMineral);
router.put('/mineral/:id_mineral',actualizarMineral);
router.get('/proyectos',consultarProyectos);
router.get('/proyecto/:id_explotacion_organizacion',consultarProyecto);
router.post('/proyecto', agregarProyecto);
router.delete('/proyecto/:id_explotacion_organizacion',eliminarProyecto);
router.put('/proyecto/:id_explotacion_organizacion',actualizarProyecto);
router.get('/etapas/:id_explotacion_organizacion',consultarEtapas);
router.get('/etapa/:id_etapa_organizacion',consultarEtapa);
router.post('/etapa', agregarEtapa);
router.delete('/etapa/:id_etapa_organizacion',eliminarEtapa);
router.put('/etapa/:id_etapa_organizacion',actualizarEtapa);
router.get('/actividades/:id_explotacion_organizacion',consultarActividades);
router.get('/actividad/:id_actividad_organizacion',consultarActividad);
router.post('/actividad', agregarActividad);
router.delete('/actividad/:id_actividad_organizacion',eliminarActividad);
router.put('/actividad/:id_actividad_organizacion',actualizarActividad);

module.exports= router;