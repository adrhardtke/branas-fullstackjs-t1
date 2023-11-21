import { Column } from "./Column"

export class Board {
    columns: Column[]
    
    constructor(public id: number, readonly name: string, readonly description: string){
        this.columns = []
    }

    addColumn (title: string, isTimable: boolean){
        this.columns.push(new Column(title, isTimable))
    }
}