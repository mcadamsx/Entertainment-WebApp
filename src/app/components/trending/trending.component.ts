import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CarouselModule, CardModule],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent {


}
