import { faker } from '@faker-js/faker'
import { Board } from '../../src/domain/entity/Board'

const makeSut = (name = faker.word.adverb(), description = faker.word.words() ) => {    
    const board = new Board(1, name, description)
    return { board }
}

describe('Board', () => {
    it('should create a board with name and description', () => {
        const name = faker.word.adverb()
        const description = faker.word.words()
        const { board } = makeSut(name,description)
        expect(board.name).toBe(name)
        expect(board.description).toBe(description)
    });
    it('should allow add columns on board', () => {
        const { board } = makeSut();
        board.addColumn(faker.word.adverb(), faker.datatype.boolean())
        board.addColumn(faker.word.adverb(), faker.datatype.boolean())
        board.addColumn(faker.word.adverb(), faker.datatype.boolean())
        expect(board.columns).toHaveLength(3)
    })
});