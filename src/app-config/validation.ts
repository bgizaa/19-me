import { plainToClass } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';
import { EnvironmentVariables } from './env.validation';

/**
 * Validate all environment variables, and throw an error if any is missing
 *
 * @param config Object containing all provide environment variables
 * @returns list of validated env variables
 */
export const validate = (config: Record<string, any>): EnvironmentVariables => {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true, // Make sure the type is respected.
  });
  const validationError: ValidationError[] = validateSync(validatedConfig, {
    whitelist: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    skipMissingProperties: false,
  });

  if (validationError.length > 0) {
    const errors: Partial<EnvironmentVariables> = {};
    validationError.forEach(
      error => (errors[error.property] = error.constraints),
    );
    throw new Error(JSON.stringify(errors));
  }
  return validatedConfig;
};
