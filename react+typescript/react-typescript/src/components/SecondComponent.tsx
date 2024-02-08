import * as React from 'react';

export interface IAppProps {
    name:string
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <h1>Meu segundo componente</h1>
        <p> O nome dele é {this.props.name}</p>
      </div>
    );
  }
}
