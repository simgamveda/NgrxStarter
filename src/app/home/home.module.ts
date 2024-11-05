import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
