import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from './commonservice.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  constructor(public commonService:CommonserviceService){

  }
  

  labels:any = ['Jan','Feb','March','April','May','June']
  data:any;
  chart:any;
  

  ngOnInit(): void {
      this.commonService.showdata().subscribe(res=>{
      this.data=res; 
      console.log(this.data)
      let time=this.data.slice(1).map((element:any) =>element[0])
      let city =this.data[0];
      let cityData = [];
      console.log("citydata: "+city);
      
      console.log(time);
      for(let i=1;i<city.length+1;i++){
        cityData.push({
          label: city[i-1],
          data: this.data.slice(1,10).map((element:any)=>element[i])

        })
        console.log("data:"+this.data);
        
      }
      console.log(cityData);
      

      this.createChart(time,cityData);
    })
   
    
   
  }

  

  createChart(time: any, cityData: any) {
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: time, 
	      datasets: cityData
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

























  
  // data :any;
  // public chart: any;

  //  title = 'multilinechart';

  //  labels:any = ['Jan','Feb','March','April','May','June']

  //  ngOnInit(): void {
  //   this.commonService.showdata().subscribe(res=>{
  //      this.data=res;
  //      console.log(this.data);
  //   })
  //    console.log()
  //   this.createChart();
  //  }

  //  createChart(){
  //   this.chart = new Chart("MyChart", {
  //     type: 'line', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //        labels: this.labels,
	//        datasets: [ {
  //         label: "Sales",
  //         data: ['467','576', '572', '79', '92',
  //              '574', '573', '576'],
  //         backgroundColor: 'blue',
  //         borderColor:'blue'
  //       },]
  //     },
  //     options: {
  //       aspectRatio:3.5
  //     }
      
  //   });
  //  }


}
