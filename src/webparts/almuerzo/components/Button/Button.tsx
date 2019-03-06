import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';


class App extends React.Component<{titulo: string}, {}> {
  public render() {
    return (
      <div className="App">
        <DefaultButton>
          {this.props.titulo}
        </DefaultButton>
      </div>
    );
  }
}

export default App;