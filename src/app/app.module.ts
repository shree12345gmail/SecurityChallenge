import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

/*Router */
import { RouterModule, Routes } from '@angular/router';
/*Router */

import { AppComponent } from './app.component';

/*Header- Footer Component */
import { HeaderComponent } from './headerfooter/header.component';
import { FooterComponent } from './headerfooter/footer.component';
/*Header- Footer Component */

/*User Component */
import { ListUsersComponent } from './user/list-users.component';
import { CreateUserComponent } from './user/create-user.component';
/*User Component */


const routes: Routes = [
  {path: 'Listuser',component: ListUsersComponent},
  {path: 'createuser',component: CreateUserComponent},
  {path: '',component: ListUsersComponent, pathMatch:'full'},
  {path: '**',component: ListUsersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListUsersComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports : [RouterModule],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
