import { Controller, Get, Query, Render } from "@nestjs/common";
// import { Response } from "express";

@Controller()
export class AppController {
  @Render("home")
  @Get()
  public index(@Query("name") name?: string) {
    return { name };
  }

  @Render("about")
  @Get("/about")
  public about() {
    return {};
  }

  @Get("/api")
  public helloApi(): string {
    return "hello";
  }
}
