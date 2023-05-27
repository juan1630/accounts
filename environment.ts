import * as dotnet from 'dotenv';
dotnet.config();

export const typesEnv = {
    port: process.env.PORT,
    token_dev: process.env.token_secret_string_dev
}