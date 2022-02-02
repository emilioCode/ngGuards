import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name: string;
  age: number;

  constructor(private authService: AuthService) { 
    
    const { name, age } = this.authService.person;
    this.name = name;
    this.age = age;
    
  }


  updatePerson = () => {
    this.authService.person = { name: this.name, age: this.age };
  }
}
