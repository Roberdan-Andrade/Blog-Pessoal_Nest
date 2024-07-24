import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./entities/Tema.entity";
import { TemaService } from "./services/tema.service";
import { TemaController } from "./controllers/Tema.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule],
})
export class TemaModule {}
