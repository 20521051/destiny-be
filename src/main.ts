import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { initSwagger } from './config/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  initSwagger(app);

  await app.listen(port, () => {
    console.log(`⚡[Server]: Server is running at https://localhost:${port}`);
    console.log(`⚡️[Swagger]: Swagger is running at http://localhost:${port}/api`);
  });
}
bootstrap();
