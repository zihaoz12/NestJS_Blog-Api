import { prop } from '@typegoose/typegoose';
import { ApiModelProperty } from '@nestjs/swagger';

export class Post{
    @ApiModelProperty({ description: 'article title', example: 'Article 1'})
    @prop()
    title: string

    @ApiModelProperty({ description: 'article title', example: 'Article 1'})
    @prop()
    content: string
}

