export class CreateAccountView{
    constructor(selectName, selectEmail, selectPassword, selectConfirmPassword, selectAge, selectCountry, selectTerms, selectCreateButton, progressBarDiv, progressBar, selectModalTerms,
        selectConfirmTerms){ 
        this.selectName = document.querySelector(selectName)
        this.selectEmail = document.querySelector(selectEmail)

        this.selectPassword = document.querySelector(selectPassword)
        this.selectConfirmPassword = document.querySelector(selectConfirmPassword)

        this.selectAge = document.querySelector(selectAge)
        this.selectCountry = document.querySelector(selectCountry)

        this.selectTerms = document.querySelector(selectTerms)
        this.selectCreateButton = document.querySelector(selectCreateButton)
        
        this.progressBarDiv = document.querySelector(progressBarDiv)
        this.progressBar = document.querySelector(progressBar)
        
        this.modal = new bootstrap.Modal(document.querySelector(selectModalTerms))
        this.confirmTermsButton = document.querySelector(selectConfirmTerms)

        this.errorName = this.selectName.closest(".mb-3").querySelector(".error-message")
        this.errorEmail = this.selectEmail.closest(".mb-3").querySelector(".error-message")
        this.errorPassword = this.selectPassword.closest(".mb-3").querySelector(".error-message")
        this.errorConfirmPassword = this.selectConfirmPassword.closest(".mb-3").querySelector(".error-message")
        this.errorAge = this.selectAge.closest(".mb-3").querySelector(".error-message")
        this.errorTerms = document.querySelector(".form-check .error-message")
    }

   showError(message, errorElement) {
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
        this.borderError(errorElement.previousElementSibling);
    }
    this.selectCreateButton.disabled = true;
    this.selectCreateButton.classList.add("disabled");
    }

    clearError(errorElement) {
        if (errorElement) {
            errorElement.textContent = "";
            errorElement.style.display = "none";
            this.clearBorderError(errorElement.previousElementSibling);
        }
        this.selectCreateButton.disabled = false;
        this.selectCreateButton.classList.remove("disabled");
    };

    borderError(inputElement) {
        if (inputElement) {
            inputElement.classList.add("is-invalid");
        };
    }

    clearBorderError(inputElement) {
        if (inputElement) {
            inputElement.classList.remove("is-invalid");
        };
    };

   showProgressBar(strength, isEmpty) {
    if (!this.progressBarDiv || !this.progressBar) return;

    if (isEmpty) {
        this.progressBarDiv.style.display = "none";
        return;
    };

    this.progressBarDiv.style.display = "flex";
    this.progressBarDiv.style.backgroundColor = "#e9ecef";
    this.progressBar.style.width = strength + "%";
    this.progressBarDiv.setAttribute("aria-valuenow", strength);

    if (strength < 40) {
        this.progressBar.style.backgroundColor = "#dc3545";
    } else if (strength < 70) {
        this.progressBar.style.backgroundColor = "#ffc107";
    } else {
        this.progressBar.style.backgroundColor = "#198754";
        }
    };

    bindName(handler){
        this.selectName.addEventListener("input", handler)
    };

    bindEmail(handler){
        this.selectEmail.addEventListener("input", handler)
    };

    bindPassword(handler){
    this.selectPassword.addEventListener("input", handler)
    };

    bindConfirmPassword(handler){
        this.selectConfirmPassword.addEventListener("input", handler)
    };

    bindAge(handler){
        this.selectAge.addEventListener("input", handler)
    };

    bindCountry(handler){
        this.selectCountry.addEventListener("change", handler)
    };

    bindTerms(handler){
        this.selectTerms.addEventListener("change", (e) => {
        handler(e);
        });
    };

    bindConfirmTerms(handler){
        this.confirmTermsButton.addEventListener("click", handler)
    };

    bindCreateAccount(handler){
        this.selectCreateButton.addEventListener("click", (e) => {
            e.preventDefault();
            handler();
        });
    };
};