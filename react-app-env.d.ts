/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string
    MONGO_USER: string
    MONGO_PASSWORD: string
    MONGO_DATABASE: string
    NODE_ENV: string
  }
}
