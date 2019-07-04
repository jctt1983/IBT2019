import { ITodo, Status } from '@ibt-root/models';

export function GetTextFromInput (caller:React.FormEvent<HTMLInputElement>) {
    return caller.currentTarget.value;
}

export function CreateNewTodo (text:string):ITodo {
    let id = createRandomInt(1,10000000);
    return {
        id,
        title: text,
        description: '',
        status: Status.InProgress
    }
}

function createRandomInt(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
