import { HttpClient } from '@angular/common/http';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { toast } from 'ngx-sonner';
// import { dummyData } from 'src/app/shared/dummy/user.dummy';
import { TableActionComponent } from './components/table-action/table-action.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableFilterService } from './services/table-filter.service';
import { Datum, EventsModel } from './model/events.model';

@Component({
  selector: 'app-table',
  imports: [
    AngularSvgIconModule,
    FormsModule,
    TableHeaderComponent,
    TableFooterComponent,
    TableRowComponent,
    TableActionComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  events = signal<Datum[]>([]);

  constructor(private http: HttpClient, private filterService: TableFilterService) {
    this.http.get<EventsModel>('https://kpin.wathiq.tech/api/events/events?page=0&size=10').subscribe({
      next: (data) => this.events.set(data.data),
      error: (error) => {
        // this.events.set(dummyData);
        this.handleRequestError(error);
      },
    });
  }

  public toggleUsers(checked: boolean) {
    this.events.update((events) => {
      return events.map((event) => {
        return { ...event, selected: checked };
      });
    });
  }

  private handleRequestError(error: any) {
    const msg = 'An error occurred while fetching users. Loading dummy data as fallback.';
    toast.error(msg, {
      position: 'bottom-right',
      description: error.message,
      action: {
        label: 'Undo',
        onClick: () => console.log('Action!'),
      },
      actionButtonStyle: 'background-color:#DC2626; color:white;',
    });
  }

  filteredUsers = computed(() => {
    const search = this.filterService.searchField().toLowerCase();
    const status = this.filterService.statusField();
    const order = this.filterService.orderField();

    return this.events()
      .filter(
        (event) =>
          event.name.en.toLowerCase().includes(search) ||
          event.name.en.toLowerCase().includes(search) ||
          event.name.en.toLowerCase().includes(search) ||
          event.name.en.includes(search),
      )
      .filter((event) => {
        if (!status) return true;
        switch (status) {
          case '1':
            return event.id === 1;
          case '2':
            return event.id === 2;
          case '3':
            return event.id === 3;
          default:
            return true;
        }
      })
      .sort((a, b) => {
        const defaultNewest = !order || order === '1';
        if (defaultNewest) {
          return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
        } else if (order === '2') {
          return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        }
        return 0;
      });
  });

  ngOnInit() {}
}
