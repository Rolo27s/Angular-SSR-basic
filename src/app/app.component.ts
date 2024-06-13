import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './services/seo.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'a2marquitectos-project';
  seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setTitle("Página de prueba de a2marquitectos");
    this.seo.updateMetaTag("description", "Estamos probando a2marquitectos, esta es una página de prueba");
    this.seo.setCanonicalURL("www.prueba-a2marquitectos.com");
    this.seo.setIndexFollow(true);
  }
}
