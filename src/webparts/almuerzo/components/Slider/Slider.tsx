import * as React from 'react';
import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Slider.module.scss';
 

type SliderProps = {
    image_url_arr: string[], 
    menu_legend_arr: string[]
}


export default class Slider extends Component<
{
    image_url_arr: string[], 
    menu_legend_arr: string[]
},
{}
> {


        

    render() {

        return (
        <div className={styles.carousel_div}>
            <Carousel infiniteLoop={true} className={styles.carousel} autoPlay={true} dynamicHeight={true}>
                  {this.dynamic_slider(this.props.image_url_arr, this.props.menu_legend_arr)}
            </Carousel>
        </div>
        );
    }
    

    public dynamic_slider(url_arr: string[], legend_arr: string[]){

        let output = [];

        for (let i = 0; i < url_arr.length; i++) {
            output[i]=
        <div>
            <img src={url_arr[i]} />
            <p className="legend">{legend_arr[i]}</p>
        </div>;
        }
    return output;
    }
};
 