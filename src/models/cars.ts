import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CarSchema = new Schema({
  custom_id: {
    type: Number,
    required: [true, 'The custom_id is required'],
    unique: true
  },
  brand: {
    type: String,
    required: [true, 'The brand is reqired'],
    min: [1, 'Min char 1'],
    max: [100, 'Max char is 100']
  },
  sub_brand: {
    type: String,
    max: [100, 'Max char is 100']
  },
  description: {
    type: String,
    max: [100, 'Max char is 100']
  },
  km: {
    type: Number
  },
  image: {
    type: String
  },
  in_maintenance: {
    type: Boolean,
    default: false
  },
  estimate_date: {
    type: Date,
    default: undefined
  },
  mechanic: {
    type: String,
    default: ''
  },
  deleted_at: {
    type: Date,
    default: undefined
  },
  updated_at: {
    type: Date,
    default: new Date()
  },
  created_at: {
    type: Date,
    default: new Date()
  }
});
CarSchema.plugin(uniqueValidator);
export default model('Car', CarSchema);
