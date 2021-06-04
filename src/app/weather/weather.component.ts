import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as XLSX from 'xlsx';

import { ApiService } from '../api.service';





@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  title= 'exportexcel';
  fileName = 'weather-data.xlsx';




  public weatherSearchForm : FormGroup;
  public weatherData : any;
  
  constructor(private formBuilder: FormBuilder,private apiService : ApiService) { }


  

  ngOnInit(){
    this.weatherSearchForm = this.formBuilder.group({
      location:[''],
      // forecast_days:['']
    

    });
   
  }

  sendToAPIXU(formValues){
     this.apiService
    .getWeather(formValues.location)
    .subscribe((data: any)=> {
      this.weatherData=data
      console.log(this.weatherData);
    })
        
        
   
    
    
    
      
  }

  openCSV():void {


    let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
    
    
        
        
    
      
  }
  
  

}
