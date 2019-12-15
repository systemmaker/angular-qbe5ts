import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FileOutputComponent } from "./feature/file-output/file-output.component";

import { AppRoutingModule } from "./app-routing.module";
import { ContentModule } from "./content/content.module";
@NgModule({
  imports: [BrowserModule, FormsModule, ContentModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, FileOutputComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
