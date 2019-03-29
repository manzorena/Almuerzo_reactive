import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponent, DATA_IS_SCROLLABLE_ATTRIBUTE } from 'office-ui-fabric-react/lib/Utilities';
import * as React from 'react';
import Rowgustos from '../Gustos/Gustos';
import data from '../Order/lista_menus';

export type SelectorCallback = (item: any) => void;
  
  class selector extends React.Component<
    {
        menuarr: Array<string>;
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
      const { selectedItem } = this.state;
      let arr = this.create_array(this.props.menuarr);
      return (
        <div>
          <Dropdown
            onChanged={(opt, i) => this.handleChange(opt)}
            placeholder="Select an Option"
            label={this.props.label}
            options={arr}
          />
          {this.ensalada()}
        </div>
      );
    }

    public ensalada(){
    if(this.state.selectedItem != undefined){
      if(this.state.selectedItem.text == "Ensalada"){
        return <Rowgustos gustos={data.menus[0]["Gustos"]} MAX={data.menus[0]["MAX"]} onChange={(ens)=>this.handleChange(ens)}/>
      }
      else{
        return <div/>
      }
      
    }
  }

    public handleChange(opt){

      if (Object.prototype.toString.call(opt) == '[object Array]'){

        this.props.onChange(opt);
    }
    else{
      
        this.setState({selectedItem: opt})
        this.props.onChange(opt["text"])
    } 
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
  