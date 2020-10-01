import * as express from "express"

const requestLogger = (request: express.Request, response: express.Response, next: express.NextFunction) => {
  console.info(`${request.method} ${request.originalUrl}`)
  const start = new Date().getTime()
  response.on("finish", () => {
    const elapsed = new Date().getTime() - start
    console.info(`${request.method} ${request.originalUrl} ${response.statusCode} ${elapsed}ms`)
  })
  next()
}

export = requestLogger
