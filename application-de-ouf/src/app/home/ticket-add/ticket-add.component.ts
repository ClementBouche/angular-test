import { Component, OnInit, Output, EventEmitter, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';
import { Ticket } from '../shared/model/ticket.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TicketValidator } from '../shared/form/ticket-validator';
import { Subscription } from 'rxjs';
import { ImgHelperService } from '../../shared/http/img-helper.service';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit, OnDestroy {

  @Input() ticket?: Ticket;

  @Output() ticketSubmit = new EventEmitter<Ticket>();

  // formulaire ticket
  form: FormGroup;

  formChange: Subscription;

  // nouveau ticket
  newTicket: Ticket;

  // attention
  emailTimeout;

  buttonMessage: String = 'Ajouter';

  formControlImage: FormControl;

  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private imgHelperService: ImgHelperService
  ) { }

  ngOnInit() {
    this.formControlImage = this.fb.control('', TicketValidator.url, TicketValidator.createResourceValidatorDebouncev3(this.imgHelperService, this.emailTimeout));
    this.form = this.fb.group({
      title: this.fb.control('titre', Validators.required),
      description: '',
      // img: this.fb.control('', TicketValidator.url, TicketValidator.createResourceValidatorDebouncev2(this.imgHelperService)),
      img: this.formControlImage,
      rating: 5,
      nbPlaces: 10
    });
    this.formChange = this.form.statusChanges.subscribe((data) => {
      console.log('statusChanges', data);
      this.cd.markForCheck();
    });
    if (this.ticket) {
      this.form.reset(this.ticket);
      this.buttonMessage = 'Modifier';
      // this.form
    }
  }

  ngOnDestroy() {
    if (this.formChange) {
      this.formChange.unsubscribe();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.newTicket = this.form.value;
      this.ticketSubmit.emit(this.newTicket);
    }
  }

  isImageValid() {
    return this.form.status === 'VALID' || this.ticket && this.ticket.img;
  }

  getImageValue() {
    if (this.form.status === 'VALID') {
      return this.form.controls.img.value 
    }
    if (this.ticket && this.ticket.img) {
      return this.ticket.img;
    }
    return '';
  }

}
