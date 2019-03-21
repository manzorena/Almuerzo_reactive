import * as React from 'react';
import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Slider.module.scss';
import * as moment from 'moment';


export interface ISliderState { //estados de Slider
    page: number
}

export interface ISliderProps { //propiedades de Slider
    data: any,
}

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

export default class Slider extends Component<ISliderProps, ISliderState> {
    public state: ISliderState = {
        page: Number(moment().format('e'))-1
    };

    render() {
        let url_arr = this.props.data.map(el => el.imagen.Url);
        let legend_arr = this.props.data.map(el => el.Title);
        let num = 0;


        if (legend_arr.length > 0) {
            return (
                <div className={styles.carousel_div}>

                {this.diaSemana()}

                    <Carousel infiniteLoop={true} className={styles.carousel} autoPlay={true} selectedItem={this.state.page} dynamicHeight={false} onChange={(ev)=>this.setState({page: ev})}>          
                        {this.dynamic_slider(url_arr, legend_arr)}
                    </Carousel>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p>no se establecio la conexion correctamente</p>
                </div>
            );
        }
    }

    public diaSemana(){
        if (this.state.page != undefined){
        if(this.props.data[this.state.page].DiaSemana == this.getDayOfWeek()){
            return <mark className={styles.hoy}>HOY</mark>
        }
        else{
            return <h4 className={styles.dia}>{this.props.data[this.state.page].DiaSemana}</h4>
        }
      }
    }


    public dynamic_slider(url_arr: string[], legend_arr: string[]) {
        let output = [];

        if (url_arr.length > 0) {

            for (let i = 0; i < url_arr.length; i++) {
                output[i] =
                    <div key={i}>
                        {this.preload_image(url_arr[i])}        
                        <p className="legend">{legend_arr[i]}</p>
                    </div>;
            }
        }
        else {
            output[0] =
                <div key={0}>
                    <img src={"https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"} />
                    <p className="legend">no se establecio la conexion correctamente</p>
                </div>;
        }
        return output;
    }

    public preload_image(url){
        let loadTimer;
        let imgObject = new Image();
        imgObject.src = url;
        imgObject.onload = () => onImgLoaded();

        function onImgLoaded() {
        if (loadTimer != null) clearTimeout(loadTimer);
        if (!imgObject.complete) {
            loadTimer = setTimeout(function() {
            onImgLoaded();
            }, 3);
        } else {
           return this.onPreloadComplete(imgObject);
        }
        }
    }

    public onPreloadComplete(imgObject){
        //call the methods that will create a 64-bit version of thumbnail here.
        var newImg = this.getImagePortion(imgObject, 120, 150, 150, 80, 2);
      
        //place image in appropriate div
        return <img alt="" src={newImg} />;
    }

    public getImagePortion(imgObj, newWidth, newHeight, startX, startY, ratio){
        /* the parameters: - the image element - the new width - the new height - the x point we start taking pixels - the y point we start taking pixels - the ratio */
        //set up canvas for thumbnail
        var tnCanvas = document.createElement('canvas');
        var tnCanvasContext = tnCanvas.getContext('2d');
        tnCanvas.width = newWidth; tnCanvas.height = newHeight;
        
        /* use the sourceCanvas to duplicate the entire image. This step was crucial for iOS4 and under devices. Follow the link at the end of this post to see what happens when you don’t do this */
        var bufferCanvas = document.createElement('canvas');
        var bufferContext = bufferCanvas.getContext('2d');
        bufferCanvas.width = imgObj.width;
        bufferCanvas.height = imgObj.height;
        bufferContext.drawImage(imgObj, 0, 0);
        
        /* now we use the drawImage method to take the pixels from our bufferCanvas and draw them into our thumbnail canvas */
        tnCanvasContext.drawImage(bufferCanvas, startX,startY,newWidth * ratio, newHeight * ratio,0,0,newWidth,newHeight);
        return tnCanvas.toDataURL();
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

};
