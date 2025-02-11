import { Component } from '@angular/core';
import { landingPageComponent } from './landingPage/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { CommonModule } from '@angular/common';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule ,landingPageComponent, OurMenuComponent, HowToOrderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
