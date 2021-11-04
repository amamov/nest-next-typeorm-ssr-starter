import path from "path";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import Next from "next";
import { RenderModule } from "nest-next";
import { Logger } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap(): Promise<void> {
  const server = await NestFactory.create<NestExpressApplication>(AppModule);
  const client = Next({
    dev: process.env.NODE_ENV !== "production",
  });
  await client.prepare();
  const renderer = server.get(RenderModule);
  renderer.register(server, client);
  server.useStaticAssets(path.join(__dirname, "..", "public"), {
    prefix: "/static/",
  });
  server.useStaticAssets(path.join(__dirname, "..", "public", "/robots.txt"), {
    prefix: "/robots.txt",
  });
  server.useStaticAssets(path.join(__dirname, "..", "public", "/favicon.ico"), {
    prefix: "/favicon.ico",
  });
  await server.listen(5500);
}

bootstrap().catch((error) => {
  new Logger("bootstrap").error(error);
});
