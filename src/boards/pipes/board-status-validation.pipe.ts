import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board.model";

// 커스텀 파이프: PUBLIC PRIVATE 만 들어오게 구현하기
export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOption = [
    BoardStatus.PRIVATE,
    BoardStatus.PUBLIC
  ]

  transform(value: any, metadata: ArgumentMetadata) {
    // console.log('value', value)
    // console.log('metadata', metadata)

    // /boards/0353f9a0-4fd8-11ef-b28f-df3b00024134/status
    // body: "status": "afdfaf" 로 요청했을 때,

    // value afdfaf
    // metadata { metatype: [Function: String], type: 'body', data: 'status' }

    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the statud options`)
    }


    return value
  }

  private isStatusValid(status: any) {
    const index = this.StatusOption.indexOf(status)
    return index !== -1
  }
}