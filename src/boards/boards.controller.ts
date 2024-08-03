import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) { }

  // @Get()
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards(); // 이렇게 바로 사용 가능
  // }

  // @Post()
  // @UsePipes(ValidationPipe) // NestJS Buint-in Pipe
  // createBoard(
  //   // @Body('title') title: string,
  //   // @Body('description') description: string 
  //   @Body() CreateBoardDto: CreateBoardDto
  // ): Board {
  //   // return this.boardsService.createBoard(title, description);
  //   return this.boardsService.createBoard(CreateBoardDto);
  // }
  
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto)
  }

  @Get('/:id')
  getBoardById(@Param('id') id:number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }

  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus
  // ) {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}
