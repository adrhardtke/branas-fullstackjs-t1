import { Board } from "../entity/Board";

export interface BoardRepository {
    save (board: Board): Promise<number>
    get (idBoard: number): Promise<Board>
    update (board: Board): Promise<void>
    delete (idBoard: number): Promise<void>
    list (): Promise<Board[]>
}