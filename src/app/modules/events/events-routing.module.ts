import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { ManageEventComponent } from './pages/manage-event/manage-event.component';


const routes: Routes = [
   {
      path: '',
      component: EventsComponent,
      children: [
        { path: '', redirectTo: 'manage-events', pathMatch: 'full' },
        { path: 'manage-events', component: ManageEventComponent },
        { path: 'create-events', component: CreateEventComponent },
        { path: '**', redirectTo: 'errors/404' },
      ],
    },

];


@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
