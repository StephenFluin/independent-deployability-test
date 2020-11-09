import { Component } from '@angular/core';
import { loadRemoteEntry, loadRemoteModule } from 'src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'id-test';
  loadAbout() {
    
  }
}
