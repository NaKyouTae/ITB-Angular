import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports:[
    MainComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'ITB-Angular';
  constructor(private router: Router){
    this.router.navigateByUrl("login");
  }
}
