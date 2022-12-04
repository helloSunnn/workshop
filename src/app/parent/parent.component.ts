import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  movId: number = 0;
  public result: any;

  // @Input() result:any
  // @Output() idMov: EventEmitter<number> = new EventEmitter<number>(); //่ส่งค่าข้อมูลออก | idMov คือตัวแปรที่กำหนดมาเลย

  // onClick() {
  //   // this.idMov.emit(this.movId); //emit คือ เอาค่า movId ไปใส่ idMov
  // }

  getRes(res: any) {
    this.result = res;
    console.log(this.result);
  }
}
