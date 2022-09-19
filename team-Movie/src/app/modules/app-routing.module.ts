import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from '../components/movie-page/movie-page.component';
import { SearchComponent } from '../components/search/search.component';
import { UserItemsComponent } from '../components/user-items/user-items.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // redirectTo: '',
  { path: 'moviePage', component: MoviePageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'user', component: UserItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
