import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig  from './app/routes'


bootstrapApplication(AppComponent,
    {
      providers: 
      [
      provideRouter(routeConfig)
      //empty array represents application routes
      ]
  }
)
  .catch(err => console.error(err));
