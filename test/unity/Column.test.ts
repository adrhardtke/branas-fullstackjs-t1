import { faker } from '@faker-js/faker';
import { Column } from "../../src/domain/entity/Column";
import { Card } from '../../src/domain/entity/Card';

/**
 * isTimable = hasEstimative
 */

const makeSut = (title = faker.word.adverb(), isTimable = faker.datatype.boolean()) => {
    const column = new Column(title, isTimable)
    return { column }
}

describe('Column', () => {
    it('should associate Cards into Column, with task title and estimative in hours, minutes and seconds', () => {
        const { column } = makeSut()
        column.addCard(new Card(1, faker.word.sample(), faker.number.int({min: 1, max: 10})), new Date())
        column.addCard(new Card(2, faker.word.sample(), faker.number.int({min: 1, max: 10})), new Date())
        column.addCard(new Card(3, faker.word.sample(), faker.number.int({min: 1, max: 10})),new Date())
        expect(column.cards).toHaveLength(3)
    });

    it('should calculate total estimative from cards in column', () => {
        const { column } = makeSut()       
        const estimative1 = faker.number.int({min: 1, max: 10})
        const estimative2 = faker.number.int({min: 1, max: 10})
        const estimative3 = faker.number.int({min: 1, max: 10})
        column.addCard(new Card(1, faker.word.sample(), estimative1), new Date())
        column.addCard(new Card(2, faker.word.sample(), estimative2), new Date())
        column.addCard(new Card(3, faker.word.sample(), estimative3), new Date())

        expect(column.getTotalEstimative()).toBe(estimative1 + estimative2 + estimative3)
    });

    it('should change Card from column and save timing', async () => {
        const createdDate = faker.date.past()
        const columnA = new Column('columnA', true)
        columnA.addCard(new Card(1, 'abc', 10), createdDate)
        const columnB = new Column('columnB', true)
        const updatedDate = faker.date.future()
        columnA.moveCardTo(1, columnB, updatedDate)
        expect(columnB.getCard(1).moveHistories[0].date).toBe(createdDate)
        expect(columnB.getCard(1).moveHistories[1].date).toBe(updatedDate)
    });
});