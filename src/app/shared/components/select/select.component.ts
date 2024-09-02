import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements OnInit {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Output() selecteddata = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}
  detectchanges(event: any) {
    this.selecteddata.emit(event);
  }
}
