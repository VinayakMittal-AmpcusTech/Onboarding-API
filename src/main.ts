import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import {join} from 'path';


async function bootstrap() {
  const server = express();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Onboarding')
    .setDescription('Onboarding API description')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer' })
    .addTag('Onboard')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger/api', app, document);
  app.enableCors();
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.useStaticAssets(join(__dirname, '..', '..', 'uploads'), {
    index: false,
    prefix: '/uploads',
});

  await app.listen(3001);
}
bootstrap();