import { Component, OnInit ,Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit { 
  @Input() title!: string;
  @Input() titlec!: string;
  @Input() btnOkText!: string;
  @Input() btnCancelText!: string;

  constructor(private activeModal: NgbActiveModal ) { }

  ngOnInit(): void {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
  public onKey(event:any){
    this.titlec += event.target.value;

  }


}
