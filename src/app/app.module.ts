import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule  } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule  } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { ListScategorieComponent } from './scategorie/list-scategorie/list-scategorie.component';
import { AddScategorieComponent } from './scategorie/add-scategorie/add-scategorie.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { MenuComponent } from './menu/menu.component';
import { DatePipe } from '@angular/common';
import { AddCommsComponent } from './comms/add-comms/add-comms.component';
import { ListCommsComponent } from './comms/list-comms/list-comms.component';
import { ListLcommsComponent } from './comms/list-lcomms/list-lcomms.component';
import { AddLcommsComponent } from './comms/add-lcomms/add-lcomms.component';
import { AddPanierComponent } from './panier/add-panier/add-panier.component';
import { AddChariotComponent } from './chariot/add-chariot/add-chariot.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component'
const MATERIAL_MODULES = [MatToolbarModule,
  MatIconModule
];
const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'clients', component: ListClientComponent},
  {path: 'panier', component: AddPanierComponent},
  {path: 'comms', component: AddCommsComponent },
  {path: 'lcomms', component: ListCommsComponent },
  {path: 'client', component: AddClientComponent},
  {path: 'categories', component: ListCategorieComponent},
  {path: 'categorie', component: AddCategorieComponent},
  {path: 'scategories', component: ListScategorieComponent},
  {path: 'scategorie', component: AddScategorieComponent},
  {path: 'larticle', component: ListArticleComponent},
  {path: 'article', component: AddArticleComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListClientComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    ListScategorieComponent,
    AddScategorieComponent,
    AddArticleComponent,
    ListArticleComponent,
    RegisterComponent,
    LoginComponent,
    ListUserComponent,
    MenuComponent,
    AddCommsComponent,
    ListCommsComponent,
    ListLcommsComponent,
    AddLcommsComponent,
    AddPanierComponent,
    AddChariotComponent,
    HomeComponent



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    NgMatSearchBarModule,
    NgbModule

  ],
  exports : MATERIAL_MODULES,
  providers: [DatePipe,{ provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent],
  entryComponents: [AddCategorieComponent]
})
export class AppModule { }
