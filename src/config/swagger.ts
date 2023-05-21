import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
export const initSwagger = (app: INestApplication) => {
  const config = new ConfigService();
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Destiny API Document')
    .setDescription('Description')
    .setVersion('1.0')
    .addTag('destiny')
    .addServer(config.get('SWAGGER_API_SERVER'))
    .addBearerAuth(
      {
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header'
      },
      'access_token'
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      port: process.env.PORT
    }
  });
};
