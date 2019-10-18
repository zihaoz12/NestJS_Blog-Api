import { Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';
import { declareTypeAlias } from '@babel/types';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';

@Controller('posts')
@ApiUseTags('Article')
export class PostsController {
    @Get()
    @ApiOperation({ title: 'show blog articles'})
    index(){
        return [
            { id: 1},
            { id: 1},
            { id: 1},
            { id: 1},
            { id: 1}
        ]
    }

    @Post()
    create(){
        return {
            success: true
        }
    }

    @Get(':id')
    detail(){
        return {
            id: 1,
            title:'aaaaa'
        }
    }
}
