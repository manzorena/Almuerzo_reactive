import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'AlmuerzoWebPartStrings';
import Almuerzo from './components/Almuerzo';
import { IAlmuerzoProps } from './components/IAlmuerzoProps';

export interface IAlmuerzoWebPartProps {
  description: string;
}

let arr = [];
let arr2 = [];

export default class AlmuerzoWebPart extends BaseClientSideWebPart<IAlmuerzoWebPartProps> {

  

  public render(): void {
    const element: React.ReactElement<IAlmuerzoProps > = React.createElement(
      Almuerzo,
      {
        image_url_arr: arr,
        menu_legend_arr: arr2
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }

}
