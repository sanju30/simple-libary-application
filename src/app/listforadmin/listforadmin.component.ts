import { Component, OnInit, Input } from "@angular/core";
import { ServiceService } from "../service.service";
import { observable } from "rxjs";
import { schema } from "../service";
import { Router } from "@angular/router";
import { post } from "selenium-webdriver/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { format } from "url";

@Component({
  selector: "app-listforadmin",
  templateUrl: "./listforadmin.component.html",
  styleUrls: ["./listforadmin.component.css"],
  providers: [ServiceService]
})
export class ListforadminComponent implements OnInit {
  info: schema[];
  addbooks: schema;
  selecteditem: schema;
  Bookname: string;
  Authorname: string;
  quantity: string;
  toggleform: boolean = false;

  constructor(private data: ServiceService, private router: Router) {}

  posts: Object;

  deletinfo(id: any) {
    //   {
    //     "n": 1,
    //     "ok": 1,
    //     "deletedCount": 1
    // }

    var infor = this.info;
    this.data.deletinfo(id).subscribe(data1 => {
      if (data1.n == 1) {
        for (var i = 0; i <= infor.length; i++) {
          if (infor[i]._id == id) {
            infor.splice(i, 1);
          }
        }
      }
    });

    this.data.deletinfo(id).subscribe(info => (this.info = info));
    alert("data deleted succesfully");
    this.data.Getposts().subscribe(data => (this.posts = data));
  }

  showeditform(item) {
    this.selecteditem = item;
    this.toggleform = !this.toggleform;
  }

  addinfo() {
    const newaddbooks = {
      Bookname: this.Bookname,
      Authorname: this.Authorname,
      quantity: this.quantity
    };

    this.data.addinfo(newaddbooks).subscribe(service => {
      this.info.push(service);
      this.data.getinfo().subscribe(info => (this.info = info));
      alert("data added succesfully");
    });
  }

  onclickdelete() {
    this.data.Getposts().subscribe(data => (this.posts = data));
  }

  update(a, b, c) {
    let newitem: schema = {
      _id: this.selecteditem._id,
      Authorname: a,
      Bookname: b,
      quantity: c
    };
    this.data.updatedshoppingitem(newitem).subscribe(result => {
      this.data.getinfo();
    });
    this.toggleform = !this.toggleform;
  }

  ngOnInit() {
    this.data.Getposts().subscribe(data => (this.posts = data));
    // this.data.getinfo().subscribe((data: schema[]) => {
    //   this.info = data;
    // });
  }
}
