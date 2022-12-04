import { Component,Input,Output,EventEmitter} from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

public data1:any;
@Input() id101:number=0;
@Output() data:EventEmitter<any> = new EventEmitter<any>

constructor (private service: MovieService) {

}
//    movIdChild: number = 0

// ngOnChanges(){
//   // this.data.emit(this.data1)
//   console.log(this.id101)
  
// }
onClick() {
  
  this.service.getMov(this.id101).subscribe(res => {
    //console.log(res)
    this.data1=res
    this.data.emit(this.data1)

  })
}
  
}









