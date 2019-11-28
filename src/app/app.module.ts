import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component";
import { AddbooksComponent } from "./addbooks/addbooks.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ListforadminComponent } from "./listforadmin/listforadmin.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AddbooksComponent,
    ListforadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
