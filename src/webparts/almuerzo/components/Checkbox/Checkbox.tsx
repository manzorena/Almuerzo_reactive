import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import styles from './Checkbox.module.scss';

class Checkbox_ extends React.Component<{label: string}, {}> {


  public render(){
    return (
      <div className={styles.check}>
        <Checkbox label={this.props.label} onChange={this._onCheckboxChange}/>
      </div>
    );
  }

  private _onCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean): void {
    console.log(`The option has been changed to ${isChecked}.`);
  }
}
export default Checkbox_;