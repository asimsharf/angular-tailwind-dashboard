import { AfterViewInit, Component } from '@angular/core';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-create-event',
  imports: [TableComponent],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css',
})
export class CreateEventComponent implements AfterViewInit {

  ngAfterViewInit() {}
}
