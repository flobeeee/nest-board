// 인터페이스: 변수의 타입만을 체크
// 클래스: 변수의 타입도 체크하고 인스턴스 또한 생성할 수 있음

// 이수업에서는 인터페이스로만 해보겠음

export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus// 공개글 비공개글
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}