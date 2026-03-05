import { CreateAccountModel } from '../models/CreateAccountModel.js';
import { CreateAccountView } from '../views/CreateAccountView.js';

export class CreateAccountController {
    constructor(model, view) {
        this.model = model
        this.view = view
        
        this.timer = null;

        this.view.bindName(this.bindValidateName.bind(this));
        this.view.bindEmail(this.bindValidateEmail.bind(this));
        this.view.bindPassword(this.bindValidatePassword.bind(this));
        this.view.bindConfirmPassword(this.bindValidateConfirmPassword.bind(this));
        this.view.bindAge(this.bindValidateAge.bind(this));
        // this.view.bindCountry(this.verificarPais.bind(this));
        this.view.bindTerms(this.bindValidateTerms.bind(this));
        this.view.bindConfirmTerms(this.bindConfirmValidateTerms.bind(this))

        this.view.bindCreateAccount(this.bindCreateAccount.bind(this));
    }

    bindValidateName() {
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
        this.model.name = this.view.selectName.value
        const error = this.model.validateName()
        if (error) {
            this.view.showError(error, this.view.errorName);
        } else {
            this.view.clearError(this.view.errorName); 
            this.updateCreateButtonState();
            };
        }, 1000);
    }

    bindValidateEmail(){
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
        this.model.email = this.view.selectEmail.value

        const error = this.model.validateEmail()
        if(error){
            this.view.showError(error, this.view.errorEmail);
        } else {
            this.view.clearError(this.view.errorEmail); 
            this.updateCreateButtonState();
            };
        }, 1000);
    }

    bindValidatePassword(){
        const password = this.view.selectPassword.value;
        const strength = this.model.calculatePasswordStrength(password);
    
        this.view.showProgressBar(strength, password.length === 0);
        
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
        this.model.password = this.view.selectPassword.value;

        const errorLen = this.model.validatePassword();
        if(errorLen){
            this.view.showError(errorLen, this.view.errorPassword);
        } else {
            this.view.clearError(this.view.errorPassword);
            this.updateCreateButtonState();
            }        
        }, 1000);
    };

    bindValidateConfirmPassword(){
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
        this.model.password = this.view.selectPassword.value;
        this.model.confirmPassword = this.view.selectConfirmPassword.value;

        const errorMatch = this.model.validatePasswords();
        if (errorMatch) {
            this.view.showError(errorMatch, this.view.errorConfirmPassword);

        } else { this.view.clearError(this.view.errorConfirmPassword);
            this.updateCreateButtonState();
            }
        }, 1000);
    };

    bindValidateAge(){
        this.model.birthDate = this.view.selectAge.value;

        const error = this.model.validateAge();
        if(error){
            this.view.showError(error, this.view.errorAge);
        } else {
            this.view.clearError(this.view.errorAge); 
            this.updateCreateButtonState();
        };
    };

    bindValidateTerms(e){
        if(this.view.selectTerms.checked){
            this.view.selectTerms.checked = false;
            this.view.modal.show();
        } else {
            e.preventDefault()
            this.view.selectTerms.checked = true;
        }
    };

    bindConfirmValidateTerms(){
        this.view.selectTerms.checked = true;
        this.model.terms = true
        const error = this.model.validateTerms()
        if(error){
            this.view.showError(error, this.view.errorTerms);
        } else {
            this.view.clearError(this.view.errorTerms); 
            this.view.modal.hide();
            this.updateCreateButtonState();
        };
    };


    bindCreateAccount(){
    const error = this.model.validateForm();
    if (!error) {
        alert("Conta criada com sucesso!");
            }; 
    };

    updateCreateButtonState() {
        const error = this.model.validateForm();
        this.view.selectCreateButton.disabled = !!error;
        this.view.selectCreateButton.classList.toggle("disabled", !!error);
    };
};

