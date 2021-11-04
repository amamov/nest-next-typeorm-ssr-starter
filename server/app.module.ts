import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { RenderModule } from "nest-next";
import Joi from "joi";
import { SnakeNamingStrategy } from "typeorm-snake-naming-strategy";
import { AppController } from "./app.controller";
import { BlogController } from "./blog/blog.controller";
import { BlogService } from "./blog/blog.service";

const typeOrmModuleOptions = {
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: "postgres",
    host: configService.get("DB_HOST"),
    port: configService.get("DB_PORT"),
    username: configService.get("DB_USERNAME"),
    password: configService.get("DB_PASSWORD"),
    database: configService.get("DB_NAME"),
    entities: [
      // BlogEntity,
    ],
    synchronize: true,
    autoLoadEntities: true,
    logging: configService.get("NODE_ENV") === "production" ? false : true,
    keepConnectionAlive: true,
  }),
  inject: [ConfigService],
};

@Module({
  imports: [
    RenderModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid("development", "production", "test", "provision")
          .default("development"),
        PORT: Joi.number().default(5500),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleOptions),
  ],
  controllers: [AppController, BlogController],
  providers: [BlogService],
})
export class AppModule {}
