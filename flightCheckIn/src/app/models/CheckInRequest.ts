export class CheckInRequest{
    constructor(
        public id:String,
        public checkIn:boolean,
        public numberOfBags:number
    ){}
}