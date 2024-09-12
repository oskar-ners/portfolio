import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileModalService {
  isModalOpen = signal(false);
}
