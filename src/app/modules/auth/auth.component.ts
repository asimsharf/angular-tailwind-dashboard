import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import packageJson from '../../../../package.json';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [AngularSvgIconModule, RouterOutlet, TranslateModule],
})
export class AuthComponent implements OnInit {
  public appJson: any = packageJson;
  constructor() {}

  ngOnInit(): void {}
}
