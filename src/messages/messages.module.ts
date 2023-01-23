import { Module } from '@nestjs/common';
import { MessagesController } from './app.controller';

@Module({
  controllers: [MessagesController]
})
export class MessagesModule {}
