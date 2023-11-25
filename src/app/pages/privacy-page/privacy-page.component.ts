import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.css']
})
export class PrivacyPageComponent {
  metaDescription:string = 'Read our privacy for Steller Security';
  metaTitle:string = 'Stellar Security - Privacy';
  metaKeywords:string = 'Stellar about, stellar security, and so on';
}
