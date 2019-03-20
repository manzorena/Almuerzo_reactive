import * as React from 'react';
import styles from './Almuerzo.module.scss';
import { IAlmuerzoProps } from './IAlmuerzoProps';
import Order from './Order/Order';
import Slider from './Slider/Slider';
import * as moment from 'moment';
import axios from 'axios';



var daysOfWeek :DayOfWeek;

export enum DayOfWeek {
  Monday = "Lunes",
  Tuesday = "Martes",
  Wednesday = "Miercoles",
  Thursday = "Jueves",
  Friday = "Viernes",
  Saturday = "Sabado",
  Sunday = "Domingo"
}

export interface IAlmuerzoState { //estados de Almuerzo
      data: any,
      loading: boolean,
      error: any
}




export default class Almuerzo extends React.Component<IAlmuerzoProps, IAlmuerzoState> {
  public state: IAlmuerzoState = {
      data: [],
      loading: true,
      error: null
};

  public render(): React.ReactElement<IAlmuerzoProps> {

    () => this.componentDidMount();

    return (
      <div className={ styles.almuerzo }>
        <div className={styles.cont1}>
          <div className={styles["sandbox-correct-pronounciation"]}>
              <h1 className={styles["heading-correct-pronounciation"]}>
                <em className={styles.titulo}>Menús del día</em>
              </h1>
          </div>

          <Slider data={this.state.data}/>
          <Order/>
        </div>
      </div>
    );
  }
  
  //`https://mstech720.sharepoint.com/sites/Dev/_api/Web/lists/GetByTitle('Lista-Menu')/items?`

  async componentDidMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    try{
      const res = await axios.get(`https://mstech720.sharepoint.com/sites/Dev/_api/Web/lists/GetByTitle('Lista-Menu')/items?`)
      const data = res.data.value

        this.setState({
          data,
          loading: false,
          error: null
        });
    }
    catch (error){      
      console.log(error)
        this.setState({
          loading: false,
          error: error
        });
    }
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }



  public getDayOfWeek() {
    switch(moment().format('dddd')) {
      case "Monday": {
        return DayOfWeek.Monday;
      }
      case "Tuesday": {
        return DayOfWeek.Tuesday;
      }
      case "Wednesday": {
        return DayOfWeek.Wednesday;
      }
      case "Thursday": {
        return DayOfWeek.Thursday;
      }
      case "Friday": {
        return DayOfWeek.Friday;
      }
      case "Saturday": {
        return DayOfWeek.Saturday;
      }
      case "Sunday": {
        return DayOfWeek.Sunday;
      }
    }    
  }

}
