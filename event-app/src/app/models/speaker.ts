export class Session{
    title:string;
    description:string;
}

export class Speaker{
    id:number;
    firstName:string;
    lastName:string;
    title?:string;
    company?:string;
    twitter?:string;
    photo?:string;
    biography:string;
    sessions?:Session [];
}