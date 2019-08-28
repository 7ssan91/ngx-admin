import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../../services/country.service";
import { HttpClient } from '@angular/common/http';
import { Icountry } from './country';

@Component({
  selector: "ngx-country-table",
  templateUrl: "./country-table.component.html",
  styleUrls: ["./country-table.component.scss"]
})
export class CountryTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      country: {
        title: 'Country',
        type: 'string',
      },
      name: {
        title: 'name',
        type: 'string',
      },
      lat: {
        title: 'Lat',
        type: 'any',
      },
      lng: {
        title: 'Lng',
        type: 'any',
      },
    },
  };

  source: any[] ;

  constructor(private http: HttpClient) {
    this.http.get<Icountry[]>("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json").subscribe(e=> {console.log(e)
    this.source= e;
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}