import { Component } from '@angular/core';

@Component({
  selector: 'app-login-type',
  templateUrl: './login-type.component.html',
  styleUrls: ['./login-type.component.css']
})

export class LoginTypeComponent {
    section1 = 'Administration'
    section2 = 'Principal\'s Cabin'
    section3 = 'Staff Room'
    section4 = 'Student\'s Room'
}
