import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { IntroComponent } from './intro/intro.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MobileModalComponent } from './mobile-modal/mobile-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    IntroComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    MobileModalComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  el = inject(ElementRef);

  ngAfterViewInit(): void {
    const navbar = this.el.nativeElement.querySelector('nav');
    const navbarHeight = navbar.offsetHeight;

    document.documentElement.style.setProperty(
      '--navbar-height',
      `${navbarHeight}px`
    );
  }
}
