import { HttpClient } from '@angular/common/http';

export class DataFile {
    data: any;

    constructor(private http: HttpClient) { 
    }

    fetchData(): void {
        this.http.get<any>('http://localhost:3000/api/word').subscribe((response: any) => {
            this.data = response;
        });
    }
}
