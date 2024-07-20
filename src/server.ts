import { app } from './app' // Importação da variável do app da aplicação de app.ts
import { env } from './env' // Importação das variáveis de ambiente já validadas de ./env/index.ts

// Colocando a aplicação para ouvir uma porta
app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
