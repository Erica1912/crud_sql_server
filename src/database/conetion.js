import sql from 'mssql';

const dbSetings = {
    authentication: {
        type: 'default',
        options: {
            userName: "bd_usuario",
            password: "admin123",
        }
    },
    options: {
        encrypt: true,
        enableArithAbort: true,
        integratedSecurity: true,
        trustServerCertificate: true,
        rowCollectionOnDone: true,
        database: 'DBA_USUARIOS',
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    },
  server: "DESKTOP-LQ3GR66",
  port: 1433,
       
  
};
export async function getConetion() {
    try{
        const pool = await sql.connect(dbSetings);
        return pool;        
    }
    catch(err){
        console.log(err);
    }
};


