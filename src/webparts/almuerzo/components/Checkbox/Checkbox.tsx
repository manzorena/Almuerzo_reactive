import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import styles from './Checkbox.module.scss';

export type CheckboxCallback = (item: any) => void;

class Checkbox_ extends React.Component<{label: string, onChange: CheckboxCallback}, {check: boolean}> {


  public render(){
    return (
      <div className={styles.check}>
        <Checkbox label={this.props.label} onChange={(e,s) => this._onCheckboxChange(e,s)}/>
      </div>
    );
  }

  public _onCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean): void {
    this.props.onChange(isChecked);
  }
}
export default Checkbox_;