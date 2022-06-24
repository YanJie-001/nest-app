import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 规则设置，需要安装两个包 class-validator class-transformer
// 可以为DTO设置规则，如果传入的值与设置的预期不同，则会自动发出400 Bad Request而不需要手动抛出异常
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 通过添加whitelist白名单的形式，可以在接收值时自动过滤dto中没有的属性
  // 如果同时启用forbidNonWhitelisted，则会在有未知属性时自动throw error

  // transform可以将通过dto的实例变为真正的实例，同时可以将传入的类型转换，例如如果从前端传回的是string，可以写为number，nest会自动为你转换
  app.enableCors()
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );
  await app.listen(3000);
}
bootstrap();
