import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import * as React from 'react';

export type SelectorCallback = (item: any) => void;
  
  class selector extends React.Component<
    {
        menuarr: Array<object>;
        label: string;
        onChange: SelectorCallback;
    },
    {
      selectedItem?: any;
    }
  > {
    private _basicDropdown = React.createRef<IDropdown>();
  
    constructor(props) {
      super(props);
      this.state = {
        selectedItem: undefined,
      };
    }
   

  
    public render() {
      const { selectedItem} = this.state;
      let arr = this.create_array(this.props.menuarr);
      return (
          <Dropdown
            onChanged={(opt, i) => this.handleChange(opt, i)}
            placeholder="Select an Option"
            label={this.props.label}
            ariaLabel="Basic dropdown example"
            options={arr}
          />
      );
    }

    public handleChange(opt, i){
      this.setState({selectedItem: opt})
      this.props.onChange(opt)
    }

    public create_array(arr_: object[]){
      let output = [];
      for (let i = 0; i < arr_.length; i++) {
        output[i]={key: i, text: arr_[i]["Menu"]}; //rellena las opciones con los campos del json
      }

      return output;
    }
  

  }
  
export default selector;
  