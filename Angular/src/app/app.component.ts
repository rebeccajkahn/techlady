import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Book} from './book'


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}!</h1>
  <ul>
  <p>Here is my list of books!</p>
  <li *ngFor="let book of books">{{book.name}}</li></ul>
    <form #bookForm="ngForm" (ngSubmit)="onSubmit(bookForm)">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" [(ngModel)]="model.name" name="name" required>
</div>
      <button type="submit" class="btn btn-success">Submit</button>
	  

    </form>`,
})
export class AppComponent implements OnInit  { 

  name = 'Angular'
  books;

  model = new Book("");

  onSubmit(bookForm) { 
  console.log(bookForm.value)
  this.http.post('http://localhost:3002/booksPost', bookForm.value).map(res => res).subscribe(res => {
                this.books = res.json();
            });
  }

  constructor(private http: Http) {}

  ngOnInit(): void {

    this.http.get('http://localhost:3002/books.json').map(res => res).subscribe(res => {
                this.books = res.json();
            });

 }
 
}
