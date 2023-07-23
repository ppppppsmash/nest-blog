import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollModule } from './poll/poll.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PollModule, UserModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
