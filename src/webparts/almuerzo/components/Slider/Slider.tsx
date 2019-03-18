import * as React from 'react';
import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Slider.module.scss';
 

export interface ISliderState { //estados de Slider

  }

export interface ISliderProps { //propiedades de Slider
    data: any, 
}

export default class Slider extends Component<ISliderProps,ISliderState> {
    public state: ISliderState = {

    };

    render() {
        
        let url_arr = this.props.data.map(el=>el.imagen.Url);
        let legend_arr =  this.props.data.map(el=>el.Title);
        console.log(url_arr);
        console.log(legend_arr);
        
        if(legend_arr.length>0){
        return (
        <div className={styles.carousel_div}>
            <Carousel infiniteLoop={true} className={styles.carousel} autoPlay={true} dynamicHeight={false}>
                  {this.dynamic_slider(url_arr, legend_arr)}
            </Carousel>
        </div>
        );
    }
    else{
        return(
            <div>
                <p>no se establecio la conexion correctamente</p>
            </div>
        );
    }
    }
    

    public dynamic_slider(url_arr: string[], legend_arr: string[]){
        let output = [];

        if (url_arr.length>0) {

            for (let i = 0; i < url_arr.length; i++) {
                output[i]=
            <div className={styles.crop} key={i}>
                <img  src={url_arr[i]} />
                <p className="legend">{legend_arr[i]}</p>
            </div>;
        }}
        else{
            output[0]=
            <div key={0}>
                <img src={"https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"} />
                <p className="legend">no se establecio la conexion correctamente</p>
            </div>;
        }
    return output;
}
};
 