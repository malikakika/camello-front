import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})
export class RequestPageComponent {

  showFormMessage: boolean = false;
  showFormItem: boolean = false;

  messageForm: FormGroup;
  itemForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {


    this.messageForm = this.formBuilder.group({
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

    this.itemForm = this.formBuilder.group({
      description: ['', Validators.required],
      productCode: ['', Validators.required],
      file: [null, Validators.required]
    });
  }



  showMessageForm() {
    this.showFormMessage = !this.showFormMessage;

    // Réinitialiser le formulaire lorsque vous le masquez
    if (!this.showFormMessage) {
      this.messageForm.reset();
    }

    // Masquer les autres formulaires
    this.showFormItem = false;
  }

  showItemForm() {
    this.showFormItem = !this.showFormItem;

    // Réinitialiser le formulaire lorsque vous le masquez
    if (!this.showFormItem) {
      this.itemForm.reset();
    }

    // Masquer les autres formulaires
    this.showFormMessage = false;
  }

  onSubmit() {
    // Vérifier la validité de chaque formulaire individuellement
    if (this.messageForm.invalid || this.itemForm.invalid) {
      return;
    }

    // Envoyer les données du formulaire
    console.log('Message Form Data:', this.messageForm.value);
    console.log('Item Form Data:', this.itemForm.value);
  }

  submitAllForms() {
    // Vérifier la validité de tous les formulaires
    if (this.messageForm.valid && this.itemForm.valid) {
      const messageFormData = this.messageForm.value;
      const itemFormData = this.itemForm.value;

      // Envoyer les données à votre backend ou effectuer une action appropriée
      console.log('Message Form Data:', messageFormData);
      console.log('Item Form Data:', itemFormData);
    } else {
      console.log('One or more forms are invalid');
    }
  }
}
