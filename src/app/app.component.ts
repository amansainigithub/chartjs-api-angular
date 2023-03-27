import { Component } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
import { ProductsService } from './_services/products.service';
Chart.register(...registerables)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chartapis';

  constructor(private product:ProductsService)
  {}
  chardata:any;
  labeldata:any[] = [];
  realdata:any[] = [];
  colordata:any[] = [];

  ngOnInit():void{
    this.product.getProduct().subscribe(data=>{
      //  console.log(data);
        this.chardata = data;
        for(let i=0 ;i<this.chardata.length;i++)
        {
          //console.log(this.chardata[i]);

          this.labeldata.push(this.chardata[i].year);
          this.realdata.push(this.chardata[i].amount);
          this.colordata.push(this.chardata[i].colorcode);
          
        }

        this.renderChart(this.labeldata,this.realdata,this.colordata,"line","piechart");
        this.renderChart(this.labeldata,this.realdata,this.colordata,"bar","barchart");
        this.renderChart(this.labeldata,this.realdata,this.colordata,"bubble","bubblechart");
        this.renderChart(this.labeldata,this.realdata,this.colordata,"doughnut","doughnutchart");
        this.renderChart(this.labeldata,this.realdata,this.colordata,"pie","piechart");
        
    },error=>{
      console.log(error);
    })

  
  }
  //  DATA_COUNT:any = 7;
  //  NUMBER_CFG:any = {count: this.DATA_COUNT, min: -100, max: 100};

  renderChart(labeldata:any , realdata :any , colordata:any,type:any,id:any)
  {
    new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [

          {
            label: 'Dataset 1',
            data: [10000,150105,122000,145001,101101,78077],
            borderColor: ["blue","green","blue"],
            tension: 0.3,
          },
          {
            label: 'Dataset 1',
            data: realdata,
            borderColor: ["green"],
            tension: 0.3,
          }
          
        //   {
        //   label: '# of Votes',
        //   data: realdata,
        //   backgroundColor:colordata,
        //   borderColor: [
        //     'rgb(255, 99, 132)',
        //     'rgb(255, 159, 64)',
        //     'rgb(255, 205, 86)',
        //     'rgb(75, 192, 192)',
        //     'rgb(54, 162, 235)',
        //     'rgb(153, 102, 255)',
        //     'rgb(201, 203, 207)'
        //   ],
        // //  tension: 0.5,
        //   borderWidth: 1
        // }
      
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  // renderChart(labeldata:any , realdata :any , colordata:any)
  // {
  //   new Chart("piechart", {
  //     type: 'bar',
  //     data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Orange'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3,30],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(255, 159, 64, 0.2)',
  //           'rgba(255, 205, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(201, 203, 207, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgb(255, 99, 132)',
  //           'rgb(255, 159, 64)',
  //           'rgb(255, 205, 86)',
  //           'rgb(75, 192, 192)',
  //           'rgb(54, 162, 235)',
  //           'rgb(153, 102, 255)',
  //           'rgb(201, 203, 207)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }
}
