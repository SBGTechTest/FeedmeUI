import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from './service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';


interface DataNode {
  
  msgId:String;
  operation:String;
  type:String;
  timestamp:String;
  eventId:String;
  category:String;
  subCategory:String;
  name: string;
  startTime:String;
  displayed:String;
  suspended:String;
  market:MarketNode[];
}
interface MarketNode {
  msgId:String;
  operation:String;
  type:String;
  timestamp:String;
  name: string;
  eventId:String;
  marketId:String;
  displayed:String;
  suspended:String;
  outcome:OutcomeNode[];
}
interface OutcomeNode {
  msgId:String;
  operation:String;
  type:String;
  timestamp:String;
  name: string;
  outcomeId:String;
  marketId:String;
  displayed:String;
  suspended:String;
  price:String;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'sbg-tech-ui';
  dataList = new MatTableDataSource();
  displayedcolumnsList: string[] = [ 
    'operation',
    'type',
    'category',
    'subCategory',
    'name',
    'displayed',
    'suspended','actions'];


  dbResponse:any = {};
  constructor(private service: ServiceService){
    this.service.getDataFromDb().subscribe((resp:any)=> {
      
      this.dbResponse = resp.response;
      console.log("resp", this.dbResponse);
      this.dataList.data = this.dbResponse;
    })
    
  }
  ngOnInit(): void {
    this.service.extractAndPushDataToKafka().subscribe() 
  }
  
  isTableExpanded = false;

  
    marketColList = [
      'operation',
      'type',
      'name',
      'displayed',
      'suspended',
      'mactions'];

      outColList = [
        'operation',
        'type',
        'name',
        'price',
        'displayed',
        'suspended'];
    expandedElement: DataNode[]=[];
  
    
}







