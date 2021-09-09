import {getConetion} from '../database/conetion'
export const getUsuario = async (req, res)=>{
   const pool = await getConetion();
   const resul = await pool.request().query("select * from USUARIOS");
   console.log(resul)
    res.json(resul.recordset)
}


