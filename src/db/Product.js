import { Schema, model } from 'mongoose';

const productsShema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      require: true,
      enum: ['books', 'electronics', 'clothing', 'other'],
      default: 'other',
    },
    description: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductCollection = model('products', productsShema);
