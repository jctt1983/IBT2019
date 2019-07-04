import { Status } from './status';

export interface ITodo {
    id:number;
    title:string;
    description:string;
    status: Status
}
