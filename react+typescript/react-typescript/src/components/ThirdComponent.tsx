import * as React from 'react';


export interface IAppProps {
    title: string
    content:string
    commentsQty: number
    tags:string[]
    category: Category
}

export enum Category{
  TS = 'TypeScript',
  JS = 'JavaScript',
  P = 'Python',
  N = 'Next'

}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <p>Quantidade de comentários {this.props.commentsQty}</p>
        <div>
            {this.props.tags.map(tag => (
                <p>#{tag}</p>
            ))}
        </div>
        <div>
          <h3> Categoria: {this.props.category}</h3>
        </div>

      </div>
    );
  }
}
