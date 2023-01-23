import { Body, Controller, Get, Post, Param } from '@nestjs/common';

const messages = [
  {
    id: 1,
    content: 'Message 1'
  }
];

type Message = {
  id: number;
  content: string;
};

@Controller()
export class MessagesController {
  @Get('messages')
  getMessages(): Message[] {
    return messages;
  }

  @Get('message/:id')
  getMessage(@Param('id') id): Message {
    return messages.find(message => message.id == id);
  }

  @Post('message')
  createMessages(@Body() body): Message {
    const newMassage = {
      id: Math.round(Math.random() * 10),
      content: body.content || 'no message'
    };
    if (body.content) messages.push(newMassage);
    return newMassage;
  }
}
