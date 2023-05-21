import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true
})
export class User {
  @Prop()
  id: string;
  @Prop()
  userName: string;
  @Prop()
  password: string;
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  phone: string;
  @Prop()
  avatar: string;
  @Prop()
  birthday: string;
  @Prop()
  address: string;
  @Prop()
  album: string[];
  @Prop()
  story: string[];
  @Prop()
  info: string;
  @Prop()
  status: boolean; // online or offline
  @Prop()
  joinDay: string;
  @Prop()
  sex: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
