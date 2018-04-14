import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

/*Header- Footer Component */
import { HeaderComponent } from './headerfooter/header.component';
import { FooterComponent } from './headerfooter/footer.component';
/*Header- Footer Component */

/*User Component */
import { ListUsersComponent } from './user/list-users.component';
import { CreateUserComponent } from './user/create-user.component';
/*User Component */


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListUsersComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
