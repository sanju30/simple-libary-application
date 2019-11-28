import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { headersToString } from "selenium-webdriver/http";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  constructor(
    private http: Http,
    private http1: HttpClient,
    private http2: HttpClient
  ) {}

  getinfo() {
    return this.http
      .get("http://localhost:9000/api/user")
      .pipe(map(res => res.json()));
  }

  addinfo(add) {
    var headers = new Headers();

    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:9000/api/addinfo", add, { headers: headers })
      .pipe(map(res => res.json()));
  }

  //delete cotact method
  deletinfo(id) {
    return this.http
      .delete("http://localhost:9000/api/deletinfo/" + id)
      .pipe(map(res => res.json()));
  }

  edit(newitem) {
    var headers = new Headers();

    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:9000/api/edit", newitem, { headers: headers })
      .pipe(map(res => res.json()));
  }

  Getposts() {
    return this.http1.get("http://localhost:9000/api/user");
  }

  updatedshoppingitem(newitem) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:9000/api/item/" + newitem._id, newitem, {
        headers: headers
      })
      .pipe(map(res => res.json()));
  }
}
