import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { CreateRecordsComponent } from './create-records/create-records.component';
import { PresentationComponent } from './presentation/presentation.component';



const routes: Routes = [
  {path: '', component: PresentationComponent},
  {path: 'records', component: RecordsComponent},
  {path: 'create-records', component:CreateRecordsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
