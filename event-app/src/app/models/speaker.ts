import { Session } from '../models/session';

export interface Speaker{
    id:number,
    firstName:string;
    lastName:string;
    title?:string;
    company?:string;
    twitter?:string;
    photo?:string;
    biography:string;
    sessions?:Session [];
}