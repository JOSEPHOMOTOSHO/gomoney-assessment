/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import { Schema, model } from 'mongoose';
import { UserInfo, UserType } from '../types';

const schema = new Schema<UserInfo>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },
    userType: {
      type: String,
      enum: UserType,
      default: UserType.USER
    }
  },
  {
    timestamps: true,
    toObject: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
    toJSON: {
      virtuals: true,
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  },
);

export const User = model<UserInfo>('User', schema);
