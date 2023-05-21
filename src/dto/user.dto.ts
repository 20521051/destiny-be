export class UserDto {
  readonly id: string;
  readonly userName: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  birthday: string;
  address: string;
  album: string[];
  story: string[];
  info: string;
  status: boolean; // online or offline
  readonly joinDay: string;
  sex: string;
}

export class CreateUserDto {
  readonly id: string;
  readonly userName: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  readonly joinDay: string;
  sex: string;
  avatar: string;
  birthday: string;
  album: string[];
  story: string[];
  info: string;
  status: boolean; // online or offline
}
