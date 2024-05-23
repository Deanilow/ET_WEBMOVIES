import { Routes } from '@angular/router';
import { HomeComponent } from './Components/pages/home/home.component';
import { SearchComponent } from './Components/pages/search/search.component';
import { TrendingComponent } from './Components/pages/trending/trending.component';
import { PopularComponent } from './Components/pages/popular/popular.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "search",
        component: SearchComponent
    },
    {
        path: "trending",
        component: TrendingComponent
    },
    {
        path: "popular",
        component: PopularComponent
    }
];
