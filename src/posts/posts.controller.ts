import { Controller, Get, Post, Body,Query, Param, Put, Delete } from '@nestjs/common';
import { create } from 'domain';
import { declareTypeAlias } from '@babel/types';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

//from Typescript
class CreatePostDto{
    @ApiModelProperty({ description: 'article title'})
    title: string
    @ApiModelProperty({ description: 'article content'})
    content: string
}



@Controller('posts')
@ApiUseTags('Articles')
export class PostsController {
    @Get()
    @ApiOperation({ title: 'show blog articles'})
    async index(){
        return await PostModel.find()
    }

    @Post()
    @ApiOperation({ title: 'create post article' })
    create(@Body() body:CreatePostDto){
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({ title: 'article detail'})
    detail(@Param('id') id: string){
        return {
            id: 1,
            title:'aaaaa'
        }
    }

    @Put(':id')
    @ApiOperation({ title: 'edit article'})
    update(@Param('id') id: string, @Body() body:CreatePostDto){
        return{
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation( {title: 'delete article'})
    remove(@Param('id') id: string){
        return{
            success:true
        }
    }
    
}
