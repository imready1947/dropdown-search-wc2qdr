import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { ColorboxComponent } from "./colorbox/colorbox.component";
import { ArrowSelectorDirective } from "./arrow-selector.directive";
import { SearchContainerComponent } from "./search-container/search-container.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    ColorboxComponent,
    ArrowSelectorDirective,
    SearchContainerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
