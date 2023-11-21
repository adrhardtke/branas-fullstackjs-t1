import { ImportCards } from '../../src/application/ImportCards'
import { GetBoard } from '../../src/application/GetBoard'
import { BoardRepositoryMemory } from '../../src/infra/repository/memory/BoardRepositoryMemory'
import * as fs from 'fs/promises'
import { Board } from '../../src/domain/entity/Board'

describe('ImportCards', () => {
    it('should import values from csv', async () => {
        const path = `C:\\Users\\Adriano\\Documents\\GitHub\\branas-fullstackjs-t1\\src\\data\\input.csv`
        const boardRepository = new BoardRepositoryMemory()
        const board = new Board(1, 'Meu board', 'simple board')
        board.addColumn('TODO',true)
        boardRepository.save(board)
        const importCards = new ImportCards(boardRepository)
        
        const file = await fs.readFile(path);
        const input = { idBoard: 1, file }
        await importCards.fromCSV(input)
        const getBoard = new GetBoard(boardRepository)
        const getBoardOutput = await getBoard.getFromId(1)
        const cards = getBoardOutput.cards
        expect(cards[0]).toEqual(expect.objectContaining({
            title: "Implementar a importação de arquivo no formato CSV",
            estimative: 10,
        }))
        expect(cards[1]).toEqual(
            expect.objectContaining({
                title: "Migrar o banco de dados para PostgreSQL",
                estimative: 20,
            }))
        expect(cards[2]).toEqual(
            expect.objectContaining({
                title: "Atualizar a versão do Vue.js para 3",
                estimative: 30,
            }))
    });
})