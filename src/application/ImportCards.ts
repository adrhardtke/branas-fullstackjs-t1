import { BoardRepository } from "src/domain/repository/BoardRepository"
import { Card } from "../domain/entity/Card"
import { GetBoard } from "./GetBoard"
import { Board } from "src/domain/entity/Board"

type Input = {
    idBoard: number
    file: Buffer
}

export class ImportCards {
    constructor(readonly boardRepository: BoardRepository){
    }

    async fromCSV({file, idBoard}: Input): Promise<void> {
        const board = await this.boardRepository.get(idBoard)
        const lines = file.toString().split('\r\n')
        lines.splice(0,1)
        lines.forEach((line, index) => {
            const [columnName, cardTitle, cardEstimative] = line.split(';')
            const columnIndex = board.columns.findIndex(column => column.title === columnName)
            board.columns[columnIndex].addCard(new Card(index, cardTitle, Number(cardEstimative)))
        })    
        await this.boardRepository.update(board)            
    }
}
