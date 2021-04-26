import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Angular material
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ExpertComponent } from './components/expert/expert.component';
import { TagComponent } from './components/tag/tag.component';
import { ExpertsPageComponent } from './pages/experts-page/experts-page.component';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';
import { NavLeftComponent } from './components/navs/nav-left/nav-left.component';
import { ExpertDetailPageComponent } from './pages/expert-detail-page/expert-detail-page.component';
import { TagCreatePageComponent } from './pages/tag-create-page/tag-create-page.component';
import { TagFormComponent } from './components/forms/tag-form/tag-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ExpertCreatePageComponent } from './pages/expert-create-page/expert-create-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    NotFoundPageComponent,
    ExpertComponent,
    TagComponent,
    ExpertsPageComponent,
    TagsPageComponent,
    NavLeftComponent,
    ExpertDetailPageComponent,
    TagCreatePageComponent,
    TagFormComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    ExpertCreatePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
