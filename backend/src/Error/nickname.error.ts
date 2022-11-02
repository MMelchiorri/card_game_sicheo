export class NicknameError extends Error{
    status:number=0

    constructor(message:string,status:number){
        super(message)
        this.name="NickName Error",
        this.status=status

    }
}