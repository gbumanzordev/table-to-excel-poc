import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { data } from 'src/app/utils/data';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  dataSet: any[];

  @ViewChild('nz-table') nzTable: ElementRef;

  ngOnInit(): void {
    this.dataSet = data;
  }

  downloadExcel(): void {
    const element = document.getElementById('nz-table');
    const workSheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet1');

    XLSX.writeFile(workBook, 'ExcelData.xlsx');
  }
}
