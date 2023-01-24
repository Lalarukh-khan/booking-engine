import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { NewArticleComponent } from './new-article/new-article.component';
// import { EditArticleComponent } from './edit-article/edit-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { RoomsComponent } from './rooms/rooms.component';
 
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RoomsComponent
    // NewArticleComponent,
    // EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
