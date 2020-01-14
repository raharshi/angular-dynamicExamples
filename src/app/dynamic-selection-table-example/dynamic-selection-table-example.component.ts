import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild ,Input, AfterContentChecked} from '@angular/core';
import {AppService} from '../app.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';




@Component({
  selector: 'app-dynamic-selection-table-example',
  templateUrl: './dynamic-selection-table-example.component.html',
  styleUrls: ['./dynamic-selection-table-example.component.css']
})
export class DynamicSelectionTableExampleComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;

  users:any;
  displayedColumns: string[] = ['select','id', 'name', 'email', 'website'];
  dataSource = new MatTableDataSource<any>(this.users);
  selection = new SelectionModel<any>(true, []);

  constructor(private appService : AppService) { }

  ngOnInit() {
    this.appService.getUserList().subscribe(
      res  =>{this.users = res;},
      error =>{console.error(error);}
    )
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngAfterContentChecked(){
    this.dataSource = new MatTableDataSource(this.users);
  }
 

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
