import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { BlogController } from "./blog/blog.controller";
import { BlogService } from "./blog/blog.service";
import { RenderModule } from "nest-next";

@Module({
  imports: [RenderModule],
  controllers: [AppController, BlogController],
  providers: [BlogService],
})
export class AppModule {}
