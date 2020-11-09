
import { Routes } from '@angular/router';
import { loadRemoteModule } from 'src/utils';

export const routes: Routes = [{
  path: 'about', loadChildren: () =>
    loadRemoteModule({ exposedModule: './about.module', 'remoteEntry': '//localhost:4201/remoteEntry.js', remoteName: 'remote1' }).then(m => m.AboutModule)
}];
