// app.component.ts
import { Component } from '@angular/core';
import { DataFile } from './datafile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Aryas-Angular-Appy';
  data: any = null;
  dataFile: DataFile;

  constructor(private http: HttpClient) {
    this.dataFile = new DataFile(http);
  }
  fetchData() {
    this.dataFile.fetchData();
  }

}
