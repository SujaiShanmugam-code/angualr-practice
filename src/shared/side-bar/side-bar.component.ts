import { Component } from '@angular/core';
import { SideBarItemsComponent } from './side-bar-items/side-bar-items.component';

@Component({
  selector: 'app-side-bar',
  imports: [SideBarItemsComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {}
