import { Component } from '@angular/core';
import { TabellaPazientiComponent } from "../tabella-pazienti/tabella-pazienti.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [TabellaPazientiComponent, RouterLink, RouterLinkActive]
})
export class DashboardComponent {

}
