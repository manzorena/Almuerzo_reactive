import * as React from 'react';
import styles from './Almuerzo.module.scss';
import { IAlmuerzoProps } from './IAlmuerzoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Order from '../components/Order/Order';



export default class Almuerzo extends React.Component<IAlmuerzoProps, {}> {
  public render(): React.ReactElement<IAlmuerzoProps> {
    return (
      <div className={ styles.almuerzo }>

        <Order/>
      </div>
    );
  }
}
