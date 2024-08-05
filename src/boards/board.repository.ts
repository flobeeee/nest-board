import { DataSource, Repository } from "typeorm";
import { Board } from "./board.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(datasource: DataSource) {
    super(Board, datasource.createEntityManager());
  }
}