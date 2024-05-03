import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  @Output() queryEvent = new EventEmitter<string>();
  query: string = '';

  submitForm() {
    if (this.query.length > 1) {
      this.queryEvent.emit(this.query);
    }
  }
}