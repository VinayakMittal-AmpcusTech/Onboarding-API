import { Module } from "@nestjs/common";
import { documentationController } from "./documentation.controller";
import { Documentation } from "./models/documentation.entity";
import { DocumentationProvider } from "./models/documentation.provider";
import { DocumentationService } from "./documentation.service";

@Module({
    imports: [Documentation],
    controllers: [documentationController],
    providers: [DocumentationService,...DocumentationProvider],
    exports: [DocumentationService]
  })
  export class  DocumentationModule{}