/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import { Schema, model } from 'mongoose';
import { FixtureInfo, StatusType } from '../types';

const schema = new Schema<FixtureInfo>(
  {
    homeTeam: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    awayTeam: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    homeTeamScore: {
      type: Number,
      default: 0,
    },
    awayTeamScore: {
      type: Number,
      default: 0,
    },
    fixtureDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: StatusType,
      default: StatusType.PENDING
    },
    fixtureLink: {
      type: String,
      unique: true,
      required: true
    }
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

export const Fixture = model<FixtureInfo>('Fixture', schema);
