import { Response } from 'express';
import {
  InternalErrorResponse,
  NotFoundResponse,
  BadRequestResponse,
} from './appResponse';

enum ErrorType {
  INTERNAL = 'InternalError',
  NOT_FOUND = 'NotFoundError',
  NO_ENTRY = 'NoEntryError',
  BAD_REQUEST = 'BadRequestError',
}

/* -- js Error object has a contructor with error message  */
export abstract class ApiError extends Error {
  constructor(public type: ErrorType, public message: string = 'error') {
    super(type);
  }

  public static handle(err: ApiError, res: Response): Response {
    switch (err.type) {
      case ErrorType.INTERNAL:
        return new InternalErrorResponse(err.message).send(res);

      case ErrorType.NOT_FOUND:
      case ErrorType.NO_ENTRY:
        return new NotFoundResponse(err.message).send(res);

      case ErrorType.BAD_REQUEST:
        return new BadRequestResponse(err.message).send(res);


      default: {
        let message = err.message;
        if (process.env.NODE_ENV === 'production') message = 'Something wrong happened.';
        return new InternalErrorResponse(message).send(res);
      }
    }
  }
}


export class InternalError extends ApiError {
  constructor(message = 'Internal error') {
    super(ErrorType.INTERNAL, message);
  }
}

export class BadRequestError extends ApiError {
  constructor(message = 'Bad Request') {
    super(ErrorType.BAD_REQUEST, message);
  }
}

export class NotFoundError extends ApiError {
  constructor(message = 'Not Found') {
    super(ErrorType.NOT_FOUND, message);
  }
}

export class NoEntryError extends ApiError {
  constructor(message = "Entry don't exists") {
    super(ErrorType.NO_ENTRY, message);
  }
}
