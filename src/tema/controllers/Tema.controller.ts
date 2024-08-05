import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { TemaService } from "../services/tema.service";
import { Tema } from "../entities/Tema.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Tema')
@UseGuards(JwtAuthGuard)
@Controller("/temas")
@ApiBearerAuth()
export class TemaController{
    constructor(private readonly temaServices: TemaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    FindAll(): Promise<Tema[]> {
        return this.temaServices.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    FindById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
        return this.temaServices.findById(id);
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    FindByDescricao(@Param('descricao') descricao: string): Promise<Tema[]> {
        return this.temaServices.findByDescricao(descricao);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    Create(@Body() tema: Tema): Promise<Tema> {
        return this.temaServices.create(tema);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    Update(@Body() tema: Tema): Promise<Tema> {
        return this.temaServices.update(tema);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    Delete(@Param('id', ParseIntPipe) id: number){
        return this.temaServices.delete(id);
    }    
}
