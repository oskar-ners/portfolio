import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MobileModalService } from '../mobile-modal/mobile-modal.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  mobileModalService = inject(MobileModalService);

  openMobileModal(): void {
    this.mobileModalService.isModalOpen.update((value) => !value);
  }
}
