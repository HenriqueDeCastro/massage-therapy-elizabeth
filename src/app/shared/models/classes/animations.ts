import {
  style,
  animate,
  animation,
} from "@angular/animations";

// =========================
// Fade
// =========================
export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('{{time}}', style({ opacity: 1 }))
]);

export const fadeOut = animation([
  animate('{{time}}', style({ opacity: 0 }))
]);

// =========================
// Slide
// =========================
export const slideUp = animation([
  style({ opacity: 0, transform: 'translateY(100%)' }),
  animate('{{time}}', style({ opacity: 1, transform: 'translateY(0)' }))
]);

export const slideLeft = animation([
  style({ opacity: 0, transform: 'translateX(100%)' }),
  animate('{{time}} {{delay}}5ms', style({ opacity: 1, transform: 'translateX(0)' }))
]);
