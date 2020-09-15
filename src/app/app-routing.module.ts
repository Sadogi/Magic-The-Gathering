import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MtgComponent } from './components/mtg/mtg.component';
import { MtgDetailsComponent } from './components/mtg-details/mtg-details.component';
import { MtgResolverService } from './resolvers/mtg-resolver.service';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'mtg', component: MtgComponent},
  {path: 'mtgdetails/:url', resolve: { mtg: MtgResolverService}, component: MtgDetailsComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
