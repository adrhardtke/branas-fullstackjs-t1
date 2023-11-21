import { Card } from "./Card";

export class Column {
    cards: Card[]
    
    constructor(readonly title: string, readonly isTimable: boolean){
        this.cards = []
    }
    
    addCard(card: Card, createdAt: Date = new Date()){
        this.cards.push(card)        
        card.addMoveHistory(this.title, createdAt)
    }

    getTotalEstimative(){
        return this.cards.reduce((previous, current) => previous += current.estimative,0)
    }

    moveCardTo (cardId: number, newColumn: Column, updatedAt: Date = new Date()){
        const cardIndex = this.cards.findIndex(card => card.id === cardId)
        if(cardIndex === undefined) throw new Error('card does not exists')   
        const [ movedCard ] = this.cards.splice(cardIndex, 1) 
        movedCard.addMoveHistory(newColumn.title, updatedAt)
        newColumn.addCard(movedCard, new Date())
        return movedCard
    }

    getCard(cardId: number){
        const card = this.cards.find(card => card.id === cardId)
        if(!card) throw new Error('Card not found')
        return card
    }
}