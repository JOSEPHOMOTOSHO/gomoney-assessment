import { Request, Response, NextFunction } from 'express';

interface ValidationErrorsParams {
  details: {
    message: string;
  }[];
}

export const errorMiddleware = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await next();
  } catch (err: any) {
    res.status(500).json({
      error: {
        success: false,
        message: err.message,
      },
    });
  }
};

export const parseValidationErrors = (
  validationErrors: ValidationErrorsParams,
): string[] => validationErrors.details.map(({ message }) => message);
