import app from './app'
import './database/conetion'

app.listen(app.get('port'))

console.log('Hola mundo',app.get('port'));