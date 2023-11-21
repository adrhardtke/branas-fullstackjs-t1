import { Card } from "src/domain/entity/Card"
import { BoardRepository } from "src/domain/repository/BoardRepository"

export class ExportCards {
    constructor(readonly boardRepository: BoardRepository){}
    async toCSV(idBoard: number): Promise<Buffer> {
        const board = await this.boardRepository.get(idBoard)
        const cards: Card[] = []
        board.columns.forEach(column => column.cards.forEach(card => cards.push(card)))
        const lines: string[] = [] 
        lines.push("card_title;card_estimative")
        cards.forEach(card => {
            lines.push(`${card.title};${card.estimative}`)
        })
        return Buffer.from(lines.join('\n'))
    }
}