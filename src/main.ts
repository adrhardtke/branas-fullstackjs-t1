import { Board } from "./domain/entity/Board";
import { Card } from "./domain/entity/Card";
import { Column } from "./domain/entity/Column";

const board = new Board(1,'test','desc')
const columnA = new Column('columnA', true)
columnA.addCard(new Card(1, 'abc', 10), new Date())
const columnB = new Column('columnB', true)

setTimeout(() => {
    columnA.moveCardTo(1, columnB, new Date())
    console.log(columnA)
}, 25000);
