import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ServiceService } from './service.service';

import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sbg-tech-ui';

  dbResponse:any = {};

  constructor(private service: ServiceService){
    this.service.getDataFromDb().subscribe((resp:any)=> {
      
      this.dbResponse = resp.response;
      console.log("resp", this.dbResponse);
      this.dataSource.data = this.dbResponse;

      console.log("this.datasource", this.dataSource.data);

    })
    //this.dataSource.data = this.dbResponse;
  }
  ngOnInit(): void {
    this.service.extractAndPushDataToKafka().subscribe({

    })

    
    
  }
  private _transformer = (node: DataNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<TableNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  

  hasChild = (_: number, node: TableNode) => node.expandable;

}
interface DataNode {
  name: string;
  children?: DataNode[];
}
interface TableNode {
  expandable: boolean;
  name: string;
  level: number;
}






