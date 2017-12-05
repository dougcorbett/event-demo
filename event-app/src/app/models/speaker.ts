export class Session{
    title:string;
    description:string;
}

export class Speaker{
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
    sessionName:string;
    sessionDescription:string;
    //sessions?:Session [];
}