import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  isRegistering: boolean = false;
  errorMessage: string = '';

  get emailFormControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordFormControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get firstnameFormControl(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastnameFormControl(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.emailFormControl.invalid || this.passwordFormControl.invalid) {
      this.errorMessage = 'Please enter a valid email and password.';
      return;
    }

    const email = this.emailFormControl.value;
    const password = this.passwordFormControl.value;

    this.authentificationService.login(email).subscribe(
      (response) => {
        console.log(response);
        // Rediriger l'utilisateur vers la page d'accueil
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  register() {
    if (
      this.firstnameFormControl.invalid ||
      this.lastnameFormControl.invalid ||
      this.emailFormControl.invalid ||
      this.passwordFormControl.invalid
    ) {
      this.errorMessage = 'Please enter all required fields.';
      return;
    }

    const firstName = this.firstnameFormControl.value;
    const lastName = this.lastnameFormControl.value;
    const email = this.emailFormControl.value;
    const password = this.passwordFormControl.value;

    // Appeler le service d'inscription avec les données du formulaire
    this.authentificationService.register(firstName, lastName, email, password).subscribe(
      (response) => {
        console.log(response);
        // Rediriger l'utilisateur vers la page de connexion après l'inscription réussie
        this.isRegistering = false;
        this.loginForm.reset();
        this.registerForm.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openRegisterForm() {
    this.isRegistering = true;
  }

  openLoginForm() {
    this.isRegistering = false;
  }
}
