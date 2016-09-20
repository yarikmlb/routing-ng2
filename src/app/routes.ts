import { RouterModule } from "@angular/router";
import { SillySortingComponent } from './silly-sorting/silly-sorting.component';
import { BubbleSortingComponent } from './bubble-sorting/bubble-sorting.component';
import { ShakeSortingComponent } from './shake-sorting/shake-sorting.component';
import { HomeComponent } from './home/home.component';
import {OddOddSortingComponent} from "./odd-odd-sorting/odd-odd-sorting.component";

const routes = [
  {path: '', component: HomeComponent},
  {path: 'silly-sorting', component: SillySortingComponent},
  {path: 'bubble-sorting', component: BubbleSortingComponent},
  {path: 'shake-sorting', component: ShakeSortingComponent},
  {path: 'odd-odd-sorting', component: OddOddSortingComponent}
];

export default RouterModule.forRoot(routes);