import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import * as React from 'react';
  
  class selector extends React.Component<
    {
        menuarr: Array<object>;
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
      var arr = this.create_array(this.props.menuarr);
      return (
          <Dropdown
            placeholder="Select an Option"
            label="Basic uncontrolled example:"
            ariaLabel="Basic dropdown example"
            options={arr}
          />
      );
    }



    public create_array(arr: Array<object>){
      var arr: Array<object>;
      for (let i = 0; i < arr.length; i++) {
        arr[i]={key: i, text: arr[i]["Menu"]};
      }
      return arr;
    }
  

  }
  
export default selector;
  