/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string
    MONGO_URL: string
    NODE_ENV: string
  }
}
