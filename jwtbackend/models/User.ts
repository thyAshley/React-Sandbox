import mongoose, { Document } from 'mongoose';

export interface UserAttribute extends Document {
  id?: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

export default mongoose.model<UserAttribute>('user', UserSchema);
