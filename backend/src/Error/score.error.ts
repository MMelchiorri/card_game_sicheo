export class ScoreError extends Error{
    status:number=0

    constructor(message:string,status:number){
        super(message)
        this.name="Score Error",
        this.status=status
    }
}