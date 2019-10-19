import { Controller, Get, Post, Body,Query, Param, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { Post as PostSchema} from './post.model';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types'


import { Crud } from 'nestjs-mongoose-crud';

//from Typescript
class CreatePostDto{
    @ApiModelProperty({ description: 'article title', example: 'Article 2'})
    @IsNotEmpty({ message: 'Please fillout the title'})
    title: string
    @ApiModelProperty({ description: 'article content', example: 'Content 2'})
    content: string
}

@Crud({
    model: PostSchema,
    routes: {
        find: {
            decorators: [
                ApiOperation( { title: 'lists of article'})
            ]
        },
        create: {
            dto: CreatePostDto
        }
    },  
})

@Controller('posts')
@ApiUseTags('Articles')
export class PostsController {
    constructor(
        @InjectModel(PostSchema) private readonly model: ModelType<PostSchema>
    ){}

    //no need if install nestjs-mongoose-crud
    // @Get()
    // @ApiOperation({ title: 'show blog articles'})
    // async index(){
    //     return await this.postModel.find()
    // }

    // @Post()
    // @ApiOperation({ title: 'create post article' })
    // async create(@Body() CreatePostDto:CreatePostDto){
    //     await this.postModel.create(CreatePostDto)
    //     return {
    //         success: true
    //     }
    // }

    // @Get(':id')
    // @ApiOperation({ title: 'article detail'})
    // async detail(@Param('id') id: string){
    //     return await this.postModel.findById(id)
    // }

    // @Put(':id')
    // @ApiOperation({ title: 'edit article'})
    // async update(@Param('id') id: string, @Body() updatePostDto:CreatePostDto){
    //     await this.postModel.findByIdAndUpdate(id, updatePostDto)
    //     return{
    //         success:true
    //     }
    // }

    // @Delete(':id')
    // @ApiOperation( {title: 'delete article'})
    // async remove(@Param('id') id: string){
    //     await this.postModel.findByIdAndRemove(id)
    //     return{
    //         success:true
    //     }
    // }
    
}
