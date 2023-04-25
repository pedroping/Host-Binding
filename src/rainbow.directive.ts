import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey',
  ];
  constructor(private el: ElementRef) {}

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;
  @HostBinding('style.outline') outline!: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.possibleColors[colorPick];
  }

  @HostListener('focus') onFocus() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.borderColor = this.possibleColors[colorPick];
    this.outline = 'none !important';
  }
}
