import { Controller, Get, Post, Body,Query, Param, Put, Delete } from '@nestjs/common';
import { create } from 'domain';
import { declareTypeAlias } from '@babel/types';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

//from Typescript
class CreatePostDto{
    @ApiModelProperty({ description: 'article title', example: 'Article 2'})
    title: string
    @ApiModelProperty({ description: 'article content', example: 'Content 2'})
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
    async create(@Body() CreatePostDto:CreatePostDto){
        await PostModel.create(CreatePostDto)
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({ title: 'article detail'})
    async detail(@Param('id') id: string){
        return await PostModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({ title: 'edit article'})
    async update(@Param('id') id: string, @Body() updatePostDto:CreatePostDto){
        await PostModel.findByIdAndUpdate(id, updatePostDto)
        return{
            success:true
        }
    }

    @Delete(':id')
    @ApiOperation( {title: 'delete article'})
    async remove(@Param('id') id: string){
        await PostModel.findByIdAndRemove(id)
        return{
            success:true
        }
    }
    
}
