import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
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
}
