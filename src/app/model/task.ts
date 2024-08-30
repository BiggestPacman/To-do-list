
export class Task {
   constructor( 
    public id: number,
    public name: string,
    public dueDate: string,
    public completed: boolean,
    public isEditing: boolean,
    public date: Date = new Date(),
   ){}
  }
  