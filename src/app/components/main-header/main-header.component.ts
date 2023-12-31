import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  @Input() isDifferentColor:boolean = false
  @Input() title:string = '';
  @Input() boldTitle:string = '';
  @Input() boldBlue:string = '';
  @Input() boldBlack:string = '';

}
