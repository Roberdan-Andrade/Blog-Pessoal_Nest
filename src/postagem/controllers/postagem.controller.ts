import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";

@Controller("/postagens")
export class PostagemController{
    constructor(private readonly postagemServices: PostagemService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    FindAll(): Promise<Postagem[]> {
        return this.postagemServices.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    FindById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return this.postagemServices.findById(id);
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    FindByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemServices.findByTitulo(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    Create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemServices.create(postagem);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    Update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemServices.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    Delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemServices.delete(id);
    }    
}
