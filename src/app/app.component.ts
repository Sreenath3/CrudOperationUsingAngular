import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudoperation';
  todaydate = new Date();
  public _opened: boolean = false;
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
}
