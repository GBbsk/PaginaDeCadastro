// src/main.js
import { CreateAccountModel } from './models/CreateAccountModel.js';
import { CreateAccountView } from './views/CreateAccountView.js';
import { CreateAccountController } from './controllers/CreateAccountController.js';

document.addEventListener("DOMContentLoaded", function() {
    const model = new CreateAccountModel();
    const view = new CreateAccountView(
        ".nameUser", ".emailUser", ".passwordUser",
        ".confirmPasswordUser", ".ageUser", ".countryUser",
        ".termsUser", ".btn-createAccount", ".progress",
        ".progress-bar", ".modalTerms", ".confirmTerms"
    );
    new CreateAccountController(model, view);
    model.validateForm()
});