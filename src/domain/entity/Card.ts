import { MoveHistory } from "./MoveHistory"

export class Card {
    moveHistories: MoveHistory[]

    constructor(readonly id: number, readonly title: string, readonly estimative: number){
        this.moveHistories = []
    }

    addMoveHistory(columnName: string, date: Date){
        this.moveHistories.push(new MoveHistory(columnName, date))
    }
}