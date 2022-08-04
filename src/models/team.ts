/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import { Schema, model } from 'mongoose';
import {TeamInfo ,TeamNameType} from '../types';

const schema = new Schema<TeamInfo>(
  {
    teamName: {
      type: String,
      enum:TeamNameType
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

export const Team = model<TeamInfo>('Team', schema);
