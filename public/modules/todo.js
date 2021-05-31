export class Todo {
    constructor(id, subject, des, date) {
        this.id = id;
        this.subject = subject;
        this.des = des;
        this.date = date;
        this.stringfy = (todos) => {
            return JSON.stringify(todos);
        };
        this.getClassOject = () => {
            return {
                id: this.id,
                subject: this.subject,
                description: this.des,
                date: this.date
            };
        };
    }
}
