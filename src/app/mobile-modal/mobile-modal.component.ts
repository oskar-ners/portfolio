import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MobileModalService } from './mobile-modal.service';

@Component({
  selector: 'app-mobile-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './mobile-modal.component.html',
  styleUrl: './mobile-modal.component.scss',
})
export class MobileModalComponent {
  mobileModalService = inject(MobileModalService);
}
