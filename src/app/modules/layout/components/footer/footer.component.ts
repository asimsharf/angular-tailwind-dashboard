import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import packageJson from '../../../../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [TranslateModule],
})
export class FooterComponent implements OnInit {
  public appJson: any = packageJson;
  public year: number = new Date().getFullYear();


  ngOnInit(): void {}
}
