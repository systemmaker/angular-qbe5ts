import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { FileOutputComponent } from './feature/file-output/file-output.component';
import { HomeComponent } from './content/home/home.component';
const routes: Routes = [
      { path: '', component: HelloComponent },
      { path: 'file', component: FileOutputComponent },
      { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}