const pool = require('../database');

///CRUD MINERALES
const consultarMinerales = async (req, res,next) => {

    try {
        const todosMinerales = await pool.query('SELECT * FROM mineral')
        res.json(todosMinerales.rows)
    
        
    } catch (error) {
        next(error)
    }

};

const consultarMineral = async (req, res,next) => {

    try {
        const { id_mineral} = req.params
        const result = await pool.query('SELECT * FROM Mineral WHERE id_mineral= $1', [id_mineral])
        if (result.rows.length === 0) return res.status(404).json({ message: 'Mineral no registrado' })
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
    
};

const agregarMineral = async (req, res,next) => {

    const { id_mineral,mi_nombre,mi_utilizacion,mi_tipo,mi_dureza,mi_maleabilidad,mi_peso } = req.body

    try {
        const result = await pool.query('INSERT INTO mineral (id_mineral,mi_nombre,mi_utilizacion,mi_tipo,mi_dureza,mi_maleabilidad,mi_peso) VALUES ($1, $2,$3,$4,$5,$6,$7) RETURNING *', [id_mineral,mi_nombre,mi_utilizacion,mi_tipo,mi_dureza,mi_maleabilidad,mi_peso])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }

};

const eliminarMineral= async (req, res,next) => {

    const {id_mineral}=req.params;
  
    try{
        const result= await pool.query('DELETE FROM mineral WHERE id_mineral= $1', [id_mineral]);
        
        if (result.rowCount===0) return res.status(404).json({
            message: 'Mineral no registrado',
        });
        return res.sendStatus(204);
    } catch (error){
        next(error);
    }
};

const actualizarMineral= async (req,res, next) => {

    const {id_mineral}= req.params;
    try {
        const {mi_nombre,mi_utilizacion,mi_tipo,mi_dureza,mi_maleabilidad,mi_peso} = req.body;
     
    const result= await pool.query('UPDATE mineral SET mi_nombre= $1, mi_utilizacion=$2, mi_tipo=$3, mi_dureza=$4, mi_maleabilidad=$5, mi_peso=$6 WHERE id_mineral=$6',[mi_nombre,mi_utilizacion,mi_tipo,mi_dureza,mi_maleabilidad,mi_peso,id_mineral]);

    if (result.rows.lenght===0)
        return res.status(404).json({
            message: 'Mineral no registrado',
        });
    return res.json(result.rows[0]);
    } catch (error) {
        next (error);
    }
};
///CRUD PROYECTOS
const consultarProyectos = async (req, res,next) => {

    try {
        const todosProyectos = await pool.query('SELECT * FROM explotacion_organizacion')
        res.json(todosProyectos.rows)
    
        
    } catch (error) {
        next(error)
    }

};

const consultarProyecto = async (req, res,next) => {

    try {
        const { id_explotacion_organizacion} = req.params
        const result = await pool.query('SELECT * FROM explotacion_organizacion WHERE id_explotacion_organizacion= $1', [id_explotacion_organizacion])
        if (result.rows.length === 0) return res.status(404).json({ message: 'Configuracion de Proyecto no registrada' })
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
    
};

const agregarProyecto = async (req, res,next) => {

    const { id_compra,cantidad,costo,id_cliente,id_producto } = req.body

    try {
        const result = await pool.query('INSERT INTO explotacion_organizacion () VALUES ($1, $2,$3,$4,$5) RETURNING *', [])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }

};

const eliminarProyecto= async (req, res,next) => {

    const {id}=req.params;
  
    try{
        const result= await pool.query('DELETE FROM explotacion_organizacion WHERE id_= $1', [id]);
        
        if (result.rowCount===0) return res.status(404).json({
            message: 'Configuracion de Proyecto no registrada',
        });
        return res.sendStatus(204);
    } catch (error){
        next(error);
    }
    
    
};

const actualizarProyecto= async (req,res, next) => {

    const {id,id_cliente}= req.params;
    try {
        const {cantidad,costo,id_producto} = req.body;
     
    const result= await pool.query('UPDATE explotacion_organizacion SET cantidad= $1, costo=$2, id_producto=$3 WHERE id_compra=$4 AND id_cliente=$5',[cantidad,costo,id_producto,id,id_cliente]);

    if (result.rows.lenght===0)
        return res.status(404).json({
            message: 'Configuracion de Proyecto no registrada',
        });
    return res.json(result.rows[0]);
    } catch (error) {
        next (error);
    }
};
///CRUD ETAPAS
const consultarEtapas = async (req, res,next) => {

    try {
        const { id_explotacion_organizacion} = req.params
        const todasEtapas = await pool.query('SELECT * FROM etapa_organizacion WHERE id_explotacion_organizacion=$1', [id_explotacion_organizacion])
        res.json(todasEtapas.rows)
    
        
    } catch (error) {
        next(error)
    }

};

const consultarEtapa = async (req, res,next) => {

    try {
        const { id_etapa_organizacion} = req.params
        const result = await pool.query('SELECT * FROM etapa_organizacion WHERE id_etapa_organizacion= $1', [id_etapa_organizacion])
        if (result.rows.length === 0) return res.status(404).json({ message: 'Configuracion de Etapa no registrada' })
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
    
};

const agregarEtapa = async (req, res,next) => {

    const { } = req.body

    try {
        const result = await pool.query('INSERT INTO etapa_organizacion () VALUES ($1, $2,$3,$4,$5) RETURNING *', [])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }

};

const eliminarEtapa= async (req, res,next) => {

    const {id}=req.params;
  
    try{
        const result= await pool.query('DELETE FROM etapa_organizacion WHERE id_= $1', [id]);
        
        if (result.rowCount===0) return res.status(404).json({
            message: 'Configuracion de Etapa no registrada',
        });
        return res.sendStatus(204);
    } catch (error){
        next(error);
    }
    
    
};

const actualizarEtapa= async (req,res, next) => {

    const {}= req.params;
    try {
        const {cantidad,costo,id_producto} = req.body;
     
    const result= await pool.query('UPDATE etapa_organizacion SET cantidad= $1, costo=$2, id_producto=$3 WHERE id_=$4',[]);

    if (result.rows.lenght===0)
        return res.status(404).json({
            message: 'Configuracion de Etapa no registrada',
        });
    return res.json(result.rows[0]);
    } catch (error) {
        next (error);
    }
};
///CRUD ACTIVIDADES
const consultarActividades = async (req, res,next) => {

    try {
        const { id_explotacion_organizacion} = req.params
        const todasActividades = await pool.query('SELECT * FROM actividad_organizacion WHERE id_explotacion_organizacion=$1', [id_explotacion_organizacion])
        res.json(todasActividades.rows)
    
        
    } catch (error) {
        next(error)
    }

};

const consultarActividad = async (req, res,next) => {

    try {
        const { id_actividad_organizacion} = req.params
        const result = await pool.query('SELECT * FROM actividad_organizacion WHERE id_actividad_organizacion= $1', [id_actividad_organizacion])
        if (result.rows.length === 0) return res.status(404).json({ message: 'Configuracion de Actividad no registrada' })
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
    
};

const agregarActividad = async (req, res,next) => {

    const { } = req.body

    try {
        const result = await pool.query('INSERT INTO actividad_organizacion () VALUES ($1, $2,$3,$4,$5) RETURNING *', [])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }

};

const eliminarActividad= async (req, res,next) => {

    const {id}=req.params;
  
    try{
        const result= await pool.query('DELETE FROM actividad_organizacion WHERE id_= $1', [id]);
        
        if (result.rowCount===0) return res.status(404).json({
            message: 'Configuracion de Actividad no registrada',
        });
        return res.sendStatus(204);
    } catch (error){
        next(error);
    }
    
    
};

const actualizarActividad= async (req,res, next) => {

    const {}= req.params;
    try {
        const {cantidad,costo,id_producto} = req.body;
     
    const result= await pool.query('UPDATE actividad_organizacion SET cantidad= $1, costo=$2, id_producto=$3 WHERE id_=$4',[]);

    if (result.rows.lenght===0)
        return res.status(404).json({
            message: 'Configuracion de Actividad no registrada',
        });
    return res.json(result.rows[0]);
    } catch (error) {
        next (error);
    }
};
///CRUD ROLES
const consultarRoles = async (req, res,next) => {

    try {
        const {} = req.params
        const todosRoles = await pool.query('SELECT * FROM rol')
        res.json(todosRoles.rows)
    
    } catch (error) {
        next(error)
    }

};

const consultarRol = async (req, res,next) => {

    try {
        const { id_rol} = req.params
        const result = await pool.query('SELECT * FROM rol WHERE id_rol= $1', [id_rol])
        if (result.rows.length === 0) return res.status(404).json({ message: 'Rol no registrado' })
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
    
};

const agregarRol = async (req, res,next) => {

    const {id_rol,ro_nombre} = req.body

    try {
        const result = await pool.query('INSERT INTO rol (id_rol,ro_nombre) VALUES ($1, $2) RETURNING *', [id_rol,ro_nombre])
        res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }

};

const eliminarRol= async (req, res,next) => {

    const {id_rol}=req.params;
  
    try{
        const result= await pool.query('DELETE FROM rol WHERE id_rol= $1', [id_rol]);
        
        if (result.rowCount===0) return res.status(404).json({
            message: 'Rol no registrado',
        });
        return res.sendStatus(204);
    } catch (error){
        next(error);
    }
    
    
};

const actualizarRol= async (req,res, next) => {

    const {id_rol}= req.params;
    try {
        const {ro_nombre} = req.body;
     
    const result= await pool.query('UPDATE rol SET ro_nombre= $1 WHERE id_rol=$2',[ro_nombre,id_rol]);

    if (result.rows.lenght===0)
        return res.status(404).json({
            message: 'Rol no registrado',
        });
    return res.json(result.rows[0]);
    } catch (error) {
        next (error);
    }
};


module.exports = {
   consultarMineral,
   consultarMinerales,
   agregarMineral,
   eliminarMineral,
   actualizarMineral,
   consultarProyecto,
   consultarProyectos,
   agregarProyecto,
   eliminarProyecto,
   actualizarProyecto,
   consultarEtapa,
   consultarEtapas,
   agregarEtapa,
   eliminarEtapa,
   actualizarEtapa,
   consultarActividad,
   consultarActividades,
   agregarActividad,
   eliminarActividad,
   actualizarActividad,
   consultarRol,
   consultarRoles,
   agregarRol,
   eliminarRol,
   actualizarRol
}