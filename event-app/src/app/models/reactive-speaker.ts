export class ReactiveSession{
    title:string;
    description:string;
}

export class ReactiveSpeaker{
    id:number;
    firstName:string;
    lastName:string;
    title?:string;
    email?:string;
    phone:string;    
    company?:string;
    twitter?:string;
    photo?:string;
    biography:string;
    sessions?:ReactiveSession [];
}