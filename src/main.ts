import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import * as mongoose from 'mongoose';


async function bootstrap() {

  mongoose.connect('mongodb://localhost/blog-api-nest',{
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true
  })
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('NestJS Blog Api')
    .setDescription('My first NestJs Project')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);


  await app.listen(5000);
}
bootstrap();
