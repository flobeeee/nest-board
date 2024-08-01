import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {
    
    this.boardsService.getAllboards() // 이렇게 바로 사용 가능
  }
}
 