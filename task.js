class Task{
    
    constructor(title, desc, dueDate){
        this.id = 1
        this.title = title
        this.desc = desc
        this.dueDate = dueDate
        this.done = true
    }
    
    
    toString(){        
        let parsedDate = this.dueDate.toLocaleString("default", {month:'long', day: 'numeric'})
        return `${this.id}. [${this.done ? 'x': ''}] ${this.title} (${parsedDate})\n${this.desc}`
    }
}

const date = new Date(2021, 8, 30)
const task = new Task('Title', 'Descriptiopn', date);

console.log(task.toString());
