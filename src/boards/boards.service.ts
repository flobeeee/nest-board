import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid} from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 우선 디비와 연동 전에 로직먼저 생성하기 위해 

  getAllBoards(): Board[] {
    return this.boards
  }

  // id에 유니크값을 넣기 위해 uuid 라이브러리 설치 진행
  // createBoard(title: string, description: string) {
  createBoard(CreateBoardDto: CreateBoardDto) {
    const { title, description} = CreateBoardDto

    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC
    }

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
