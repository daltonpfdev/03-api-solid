import 'dotenv/config' // Carregando as variáveis de ambiente de .env
import { z } from 'zod' // Carregando a biblioteca de validação

// Criando a estrutura de validações com o zod
const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
})

// Validando todas as variaveis de ambiente
const _env = envSchema.safeParse(process.env)

// Se alguma variável de ambiente der erro, matar a aplicação informando qual variável de ambiente deu erro
if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())
  throw new Error('Invalid environment variables.')
}

// Se tudo der certo, exportar os dados das variáveis de ambiente para o projeto
export const env = _env.data
