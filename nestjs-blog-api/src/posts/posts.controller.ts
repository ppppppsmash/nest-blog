import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: PostType): void {
    this.postsService.create(post);
  }

  @Get(":id")
  find(@Param("id") id: string): PostType {
    return this.postsService.find(id);
  }

}
