import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import * as React from 'react';
  
  class selector extends React.Component<
    {
        menuarr: Array<string>;
        label: string;
    },
    {
      selectedItem?: { key: string | number | undefined };
      selectedItems: string[];
    }
  > {
    private _basicDropdown = React.createRef<IDropdown>();
  
    constructor(props) {
      super(props);
      this.state = {
        selectedItem: undefined,
        selectedItems: [],
      };
    }
   

  
    public render() {
      const { selectedItem, selectedItems } = this.state;
      let arr = this.create_array(this.props.menuarr);
      return (
          <Dropdown
            placeholder="Select an Option"
            label={this.props.label}
            options={arr}
          />
      );
    }



    public create_array(arr_: Array<string>){
      let output = [];
      for (let i = 0; i < arr_.length; i++) {
        output[i]={key: i, text: arr_[i]}; //rellena las opciones con los campos del json
      }

      return output;
    }
  

  }
  
export default selector;
  