import { DatabaseModule } from "src/database/database.module";
import { Module } from "@nestjs/common";
import { BackgroundCheckProvider } from "./models/backgroundCheck.provider";
import { BackgroundCheck } from "./backgroundCheck.controller";
import { BackGround_Check_service } from "./backgroundCheck.service";

@Module({
  imports: [DatabaseModule],
  controllers: [BackgroundCheck],
  providers: [BackGround_Check_service, ...BackgroundCheckProvider],
  exports: [BackGround_Check_service]
})
export class BackgroundCheckModule { }