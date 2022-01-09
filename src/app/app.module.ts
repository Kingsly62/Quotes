import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RateUsComponent } from './rate-us/rate-us.component';
import { FooterComponent } from './footer/footer.component';
import { DownvoteComponent } from './downvote/downvote.component';
import { SubcribeComponent } from './subcribe/subcribe.component';
import { RegisterComponent } from './register/register.component';
import { CompanyComponent } from './company/company.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactComponent,
    RateUsComponent,
    FooterComponent,
    DownvoteComponent,
    SubcribeComponent,
    RegisterComponent,
    CompanyComponent,
    QuickLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
