import { Component, OnInit } from "@angular/core";
import { schema } from "../service";
import { ServiceService } from "../service.service";
import { post } from "selenium-webdriver/http";
import { Router } from "@angular/router";
import { from } from "rxjs";
import { resetFakeAsyncZone } from "@angular/core/testing";
declare var jQuery: any;

@Component({
  selector: "app-addbooks",
  templateUrl: "./addbooks.component.html",
  styleUrls: ["./addbooks.component.css"],
  providers: [ServiceService]
})
export class AddbooksComponent implements OnInit {
  info: schema[];
  addbooks: schema;
  Bookname: string;
  Authorname: string;
  quantity: string;
  btnvisibility: boolean = true;

  constructor(private addinfo_: ServiceService, private router: Router) {}

  posts: Object;

  addinfo() {
    const newaddbooks = {
      Bookname: this.Bookname,
      Authorname: this.Authorname,
      quantity: this.quantity
    };

    if (this.Bookname && this.Authorname && this.quantity != "") {
      this.addinfo_.addinfo(newaddbooks).subscribe(service => {
        this.info.push(service);
        this.addinfo_.getinfo().subscribe(info => (this.info = info));
        alert("data added sucessfully");
        this.Authorname = "";
        this.Bookname = "";
        this.quantity = "";
      });
    } else {
      alert(" plz enter the correct value ");
    }
  }

  close() {
    this.addinfo_.Getposts().subscribe(data => (this.posts = data));
  }

  ngOnInit() {
    this.addinfo_.getinfo().subscribe(info => (this.info = info));

    this.addinfo_.Getposts().subscribe(data => (this.posts = data));
  }
}
