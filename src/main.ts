import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true, //QUITA LA DATA EXTRAS QUE VIENENE EN EL BODY PARA EL POST Y UPDATE
      forbidNonWhitelisted: true //ERROR 400 CUANDO UN VALOR NO EXISTE EN EL DTO QUE VIENE DEL BODY
    })
  )

  await app.listen(3000);
}
main();
