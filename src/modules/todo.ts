import {getObjects} from './todo_interface.js'

export class Todo implements getObjects {
    constructor(private id:string|number,private subject:string,private des:string,private date:string|Date){}

    stringfy=(todos:object):string=>{
       return JSON.stringify(todos)
    }
    getClassOject=():object=>{
        return{
            id:this.id,
            subject:this.subject,
            description:this.des,
            date:this.date
        }
    }
    
}