export class LoginError extends Error{
    status:number=0

    constructor(message:string,status:number){
        super(message)
        this.name="Login Error",
        this.status=status

    }
}