import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';


class Checkbox_ extends React.Component<{label: string}, {}> {


  public render(){
    return (
      <div>
        <Checkbox label={this.props.label} onChange={this._onCheckboxChange}/>
      </div>
    );
  }

  private _onCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean): void {
    console.log(`The option has been changed to ${isChecked}.`);
  }
}
export default Checkbox_;