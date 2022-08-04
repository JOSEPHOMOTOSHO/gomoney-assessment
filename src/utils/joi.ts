/* eslint-disable import/prefer-default-export */
// @ts-nocheck
import Joi from 'joi';
import joiObjectId from 'joi-objectid';

declare module 'joi' {
  interface Root {
    objectId(): any;
  }
}

Joi.objectId = joiObjectId(Joi);

export { Joi };
