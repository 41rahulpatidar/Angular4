import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient)
  	{

  	}
title = 'app';
	results = {};


 ngOnInit(): void {
    	this.http.get("https://jsonplaceholder.typicode.com/comments?postId=1").subscribe(data => {
    		this.results = data
    		console.log(this.results);
    	});
  	}

}
