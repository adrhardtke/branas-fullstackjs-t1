import { Board } from "src/domain/entity/Board";
import { BoardRepository } from "src/domain/repository/BoardRepository";

export class BoardRepositoryMemory implements BoardRepository {
    boards: Board[]
    counter = 0
    constructor () {
        this.boards = []
    }

    async save(board: Board): Promise<number> {
        if(!board.id){
            board.id === this.counter++
        }
        await this.boards.push(board)
        return board.id
    }
    async get(idBoard: number): Promise<Board> {
        const board = this.boards.find(board => board.id === idBoard)
        if(!board) throw new Error('Invalid board')
        return board
    }
    async update(board: Board): Promise<void> {
        await this.delete(board.id)
        this.save(board)
    }
    async delete(idBoard: number): Promise<void> {
        const existingBoard = await this.get(idBoard)
        if(!existingBoard) throw new Error("Board not found.");
        this.boards.splice(this.boards.indexOf(existingBoard), 1)
    }
    async list(): Promise<Board[]> {
        return this.boards
    }
    
}