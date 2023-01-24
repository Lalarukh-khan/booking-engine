import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RoomsComponent } from './rooms/rooms.component';
// import { EditArticleComponent } from './edit-article/edit-article.component';
// import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
  {
    path: 'rooms', component: RoomsComponent
  },
  {
    path: '', component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
