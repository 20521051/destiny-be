import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
//We need to access PrismaService here !
@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}