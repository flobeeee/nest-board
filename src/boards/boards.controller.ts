import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards(); // 이렇게 바로 사용 가능
  }

  @Post()
  createBoard(
    // @Body('title') title: string,
    // @Body('description') description: string 
    @Body() CreateBoardDto: CreateBoardDto
  ): Board {
    // return this.boardsService.createBoard(title, description);
    return this.boardsService.createBoard(CreateBoardDto);
  }

  /* post 요청시 받은 응답
    {
    "id": "46e90980-4fbf-11ef-b074-0561d4eb0c3a",
    "title": "Board 1",
    "description": "Description",
    "status": "PUBLIC"
  }
  */

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
