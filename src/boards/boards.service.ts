import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid} from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 우선 디비와 연동 전에 로직먼저 생성하기 위해 

  getAllBoards(): Board[] {
    return this.boards
  }

  // id에 유니크값을 넣기 위해 uuid 라이브러리 설치 진행
  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC
    }

    this.boards.push(board);
    return board;
  }
}
