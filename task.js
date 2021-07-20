class Task{
        
    set Description(newVal){
        this.desc = newVal
    }

    set DueDate(newVal){
        this.dueDate = newVal
    }

    static incrementId(){
        if(!this.latestId){
            this.latestId = 1
        } 
        else this.latestId++
        return this.latestId
    }
    

    constructor(title, desc, dueDate){
        this.id =  Task.incrementId()
        this.title = title
        this.desc = desc
        this.dueDate = dueDate
        this.done = false
    }


    toggle() {
        this.done = !this.done 
    }
    
    postpone (timeSpan){
        let result = this.dueDate.setDate(this.dueDate.getDate() + timeSpan)
        return result
    }

    isOverdue(){
        return new Date() > this.dueDate
    }
    
    toString(){        
        let parsedDate = this.dueDate.toLocaleString("default", {month:'short', day: 'numeric'})
        return `${this.id}. [${this.done ? 'x': ' '}] ${this.title} (${parsedDate})\n${this.desc} ${this.isOverdue() ? '\nYour task is overdue' : ''}`
    }
}

const date1 = new Date(2021, 3, 30)
const date2 = new Date(2021, 4, 25)
const date3 = new Date(2021, 5, 30)

const task1 = new Task('Title','Description', date1);
const task2 = new Task('Title', 'Descriptiopn', date2);
const task3 = new Task('Title', 'Descriptiopn', date3);

console.log('---before toggle---\n',task1.toString());
task2.toggle()
task2.postpone(1)
console.log('---first toggle---\n',task2.toString());
task3.toggle()
task3.toggle()
console.log('---second toggle---\n',task3.toString());
