import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import Next from "next";
import { RenderModule } from "nest-next";

async function bootstrap(): Promise<void> {
  const server = await NestFactory.create(AppModule);
  const client = Next({
    dev: process.env.NODE_ENV !== "production",
  });
  await client.prepare();
  const renderer = server.get(RenderModule);
  renderer.register(server, client);
  await server.listen(5500);
}

bootstrap();
