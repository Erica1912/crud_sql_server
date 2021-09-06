### crud_sql_server :zap:
*****

Crear un crud que conecte a una bd sql server con node.

Hacer consultas básicas del CRUD usando el módulo de npm llamado "pg", el cual nos permite manejar las consultas usando promesas o async/await.

#### Instalaciones :computer:

1. Node JS :heavy_check_mark:
2. Sql Server :heavy_check_mark: 
3. Bootstrap :heavy_check_mark:


#### Comandos :computer:

Después de tener instalado el Node JS creamos el archivo package.json con los comandos

```python
npm init -y
```

Intalaremos algunos módulos que vamos a necesitar para crear nuestro crud

- **mssql** un módulo que está relacionado como sql server
- **express** es un módulo que nos va ayudar con las rutas
- **cors** nos da los permisos para trabajar con varias ip
- **morgan**
- **dotenv** son las variables de entorno para no tenerlas directamente en nuestro código

```
npm install mssql express morgan  cors dotenv
```


**Erica Ruiz**




