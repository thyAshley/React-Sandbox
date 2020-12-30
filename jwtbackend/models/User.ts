import mongoose, { Document } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

export interface UserAttribute extends Document {
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<UserAttribute>({
  email: {
    type: String,
    required: [true, 'Email is an required field'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is an required field'],
    minlength: [6, 'Password must be at least 6 character long'],
  },
});

UserSchema.pre('save', function () {
  const salt = bcrypt.genSaltSync();
  this.password = bcrypt.hashSync(this.password, salt);
});

export default mongoose.model<UserAttribute>('user', UserSchema);
