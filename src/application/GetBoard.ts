import { BoardRepository } from "src/domain/repository/BoardRepository";

type Output = {
    idBoard: number,
    cards: { title: string, estimative: number }[]
}

export class GetBoard {
    constructor(readonly boardRepository: BoardRepository){}

    async getFromId (id: number): Promise<Output> {
        const board = await this.boardRepository.get(id)
        if(!board) throw new Error("Board not found")
        const output: Output = {
            idBoard: board.id,
            cards: []
        }
        for (const column of board.columns){
            for (const card of column.cards){
                output.cards.push({title: card.title, estimative: card.estimative})
            }            
        }
        return output
    }
}
