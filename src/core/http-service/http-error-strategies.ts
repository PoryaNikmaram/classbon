import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledException,
  ValidationError,
} from "@/types/http-errors.interface";

export type apiErrorHandler = (error: ApiError) => void;

export const badRequestErrorStrategy: apiErrorHandler = (error) => {
  throw {
    ...error,
  } as BadRequestError;
};

export const validationErrorStrategy: apiErrorHandler = (error) => {
  throw {
    ...error,
  } as ValidationError;
};

export const notFoundErrorStrategy: apiErrorHandler = (error) => {
  throw {
    ...error,
    detail: "سرویس مورد نظر یافت نشد",
  } as NotFoundError;
};

export const unauthorizedErrorStrategy: apiErrorHandler = (error) => {
  throw {
    ...error,
    detail: "دسترسی به سرویس مورد نظر امکان پذیر نمی باشد",
  } as UnauthorizedError;
};

export const unhandledExceptionStrategy: apiErrorHandler = (error) => {
  throw {
    ...error,
    detail: "خطای سرور",
  } as UnhandledException;
};

export const networkErrorStrategy = (): void => {
  throw { detail: "خطای شبکه" } as NetworkError;
};

export const errorHandler: Record<number, apiErrorHandler> = {
  400: (error) =>
    (error.errors ? validationErrorStrategy : badRequestErrorStrategy)(error),
  403: unauthorizedErrorStrategy,
  404: notFoundErrorStrategy,
  500: unhandledExceptionStrategy,
};
