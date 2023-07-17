import { NextFunction, Request, Response } from "express";
import {
  INVALID_CREDENTIALS,
  INVALID_PARAMETERS,
  INVALID_TOKEN,
  NAME_EXISTS,
  NOT_AUTHORIZED,
  NO_TOKEN,
} from "../constants/errors";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (!res.statusCode || res.statusCode < 400)
    res.status(errorStatus(err.name));
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : "",
  });
};

const errorStatus = (error: string) => {
  if (
    [
      INVALID_PARAMETERS.name,
      NAME_EXISTS.name,
      "CastError",
      "ValidationError",
    ].includes(error)
  )
    return 400;
  if (
    [
      INVALID_CREDENTIALS.name,
      NO_TOKEN.name,
      INVALID_TOKEN.name,
      "JsonWebTokenError",
    ].includes(error)
  )
    return 401;
  if ([NOT_AUTHORIZED.name].includes(error)) return 403;
  return 500;
};

export default errorHandler;
