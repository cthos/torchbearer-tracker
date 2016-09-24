import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GMApp } from './gm_app.module';
const platform = platformBrowserDynamic();

platform.bootstrapModule(GMApp);