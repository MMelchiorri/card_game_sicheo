export class NumberError extends Error{
    status:number=0

    constructor(message:string,status:number){
        super(message)
        this.name="Number Error",
        this.status=status
    }
}