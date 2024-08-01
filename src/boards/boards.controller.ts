import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards(); // 이렇게 바로 사용 가능
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string 
  ): Board {
    return this.boardsService.createBoard(title, description);
  }

  /* post 요청시 받은 응답
    {
    "id": "46e90980-4fbf-11ef-b074-0561d4eb0c3a",
    "title": "Board 1",
    "description": "Description",
    "status": "PUBLIC"
  }
  */
}
