import * as dotenv from 'dotenv';
export interface MatrixConfig {
    baseUrl: string;
    userId: string;
    accessToken: string;
}
export interface Config {
    matrix: MatrixConfig;
}
dotenv.config({path: `.env.${process.env.NODE_ENV}.local`});
dotenv.config({path: ".env"});
export const config: Config = {
    matrix: {
        baseUrl: process.env.MATRIX_BASE_URL,
        userId: process.env.MATRIX_USER_ID,
        accessToken: process.env.MATRIX_ACCESS_TOKEN
    }
}
