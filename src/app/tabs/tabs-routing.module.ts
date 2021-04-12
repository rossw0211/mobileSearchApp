import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage, 
    children: [ 
      { 
        path: 'movies', 
        loadChildren: () => import('../pages/movies/movies.module').then( m => m.MoviesPageModule)
      }, 
      {
         path: 'movies/:id', 
         loadChildren: () => import('../pages/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
      }
      , 
      {
        path: 'favourites', 
        loadChildren: () => import('../pages/favourites/favourites.module').then( m => m.FavouritesPageModule)
      },
      {
        path: 'watchlist', 
        loadChildren: () => import('../pages/watchlist/watchlist.module').then( m => m.WatchlistPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
