import * as React from 'react';
import { ITodo, Status } from '@ibt-root/models';
import { Label, Icon, DraggableCard } from '@ibt-components';

import * as styles from './Home.css';
import { GetTextFromInput, CreateNewTodo } from './Home.fn';

interface IHomeProps {
    todos: ITodo[],
    onAdd: (newTodo:ITodo) => void
}

interface IHomeState {
    newTodoInput: string
}

export class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);

        this.state = {
            newTodoInput: ''
        }
    }

    UpdateNewTodoInput = (newTodoInput) => this.setState({newTodoInput});

    public render() {
        return (
            <div className={styles.root}>
                <h1>Todo Application</h1>
                <input value={this.state.newTodoInput} onChange={(caller)=>this.UpdateNewTodoInput(GetTextFromInput(caller))} /> <span className={styles.sudoIcon} onClick={()=>this.props.onAdd(CreateNewTodo(this.state.newTodoInput))}><strong>+</strong></span>
                <div className={styles.todoListContainer}>
                    <div className={styles.listContainer}>
                        <h2>In Progress</h2>
                        <div className={`${styles.cardContainer} ${styles.inProgressContainer}`}>
                        {
                            this.props.todos.filter(todo => todo.status === Status.InProgress).map(todo =>
                                <Card key={`crd-ip-${todo.id}`} id={todo.id}>
                                    <div>
                                        {/* <div><Label onRender={(renderProps:any, render:any) => {
                                            return (
                                                <span>{renderProps.children} <Icon icon='?' rotate={false} size='small' /></span>
                                            );
                                        }}>{todo.title}</Label></div> */}
                                        <div><Label></Label><strong>{todo.title}</strong></div>
                                        <div>{todo.description}</div>
                                    </div>
                                </Card>
                            )
                        }
                        </div>
                    </div>
                    <div className={styles.listContainer}>
                        <h2>Complete</h2>
                        <div className={`${styles.cardContainer} ${styles.completeContainer}`}>
                        {
                            this.props.todos.filter(todo => todo.status === Status.Complete).map(todo =>
                                <Card key={`crd-cmp-${todo.id}`} id={todo.id}>
                                    <div>
                                        {/* <div><Label onRender={(renderProps:any, render:any) => {
                                            return (
                                                <span>{renderProps.children} <Icon icon='?' rotate={false} size='small' /></span>
                                            );
                                        }}>{todo.title}</Label></div> */}
                                        <div><strong>{todo.title}</strong></div>
                                        <div>{todo.description}</div>
                                    </div>
                                </Card>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

interface ICardProps {
    id: number,
    children?: React.ReactChild
}

const Card = (props:ICardProps) => <div id={`crd-${props.id}`} className={styles.card}>{props.children}</div>

// const DragCard = DraggableCard(Card);
