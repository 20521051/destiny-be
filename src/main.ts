import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './config/swagger';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  initSwagger(app);

  await app.listen(port, () => {
    console.log(`⚡[Server]: Server is running at https://localhost:${port}`);
    console.log(`⚡️[Swagger]: Swagger is running at http://localhost:${port}/docs`);
  });
}
bootstrap();
