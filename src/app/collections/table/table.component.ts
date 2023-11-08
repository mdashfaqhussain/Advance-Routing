import { Component, Input } from '@angular/core';

interface Table {
  name: string;
  age: number;
  job: string;
}

interface TableHeader {
  key: string;
  label: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data?: Table[];
  @Input() headers?: TableHeader[];
  @Input() className?: string;
}
