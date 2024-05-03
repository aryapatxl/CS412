import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  data: any;

  constructor(private apiService: ApiService) { }

  fetchData(query: string) {
    this.apiService.fetchData(query).subscribe(response => {
      this.data = response;
    });
  }
}