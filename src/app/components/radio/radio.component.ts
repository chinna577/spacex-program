import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() radioArray: any[];
  @Output() onFilterChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onRadioChange(event) {
    this.onFilterChange.emit(event);
  }

}
