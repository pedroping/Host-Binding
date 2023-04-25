import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RainbowInputComponent } from './rainbow-input/rainbow-input.component';
import { RainbowDirective } from './rainbow.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [RainbowInputComponent, RainbowDirective],
  exports: [RainbowInputComponent],
})
export class MainModule {}
