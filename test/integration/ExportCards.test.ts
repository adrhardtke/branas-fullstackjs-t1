import { Card } from "../../src/domain/entity/Card";
import { ExportCards } from '../../src/application/ExportCards'
import { BoardRepositoryMemory } from "../../src/infra/repository/memory/BoardRepositoryMemory";
import { Board } from "../../src/domain/entity/Board";

describe('ExportCards', () => {
    it('should export cards to .csv file', async () => { 
        const boardRepository = new BoardRepositoryMemory()
        const board = new Board(1, 'Meu board', 'simple board')
        board.addColumn('TODO',true)
        boardRepository.save(board)
        const todoColumn = board.columns.find(column => column.title === 'TODO')
        todoColumn?.addCard(new Card(1,"a",10))
        todoColumn?.addCard(new Card(1,"b",20))
        todoColumn?.addCard(new Card(1,"c",30))
        const exportCards = new ExportCards(boardRepository)
        const file = await exportCards.toCSV(board.id)
        expect(file.toString()).toBe('card_title;card_estimative\na;10\nb;20\nc;30');
    });
});