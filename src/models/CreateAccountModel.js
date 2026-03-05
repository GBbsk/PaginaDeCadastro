import { Validators } from '../utils/validators.js';

export class CreateAccountModel {
    constructor(name, email, password, confirmPassword, birthDate, country, terms) {
        this.name = name ?? ""
        this.email = email ?? ""
        this.password = password ?? ""
        this.confirmPassword = confirmPassword ?? ""
        this.birthDate = birthDate ?? ""
        this.country = country ?? ""
        this.terms = terms ?? false
    }

    validateName() {
        if (!Validators.isValidName(this.name))
            return "Nome inválido! O nome deve conter mais de 3 caracteres.";
        return null;
    }

    validateEmail() {
        if (!Validators.isValidEmail(this.email))
            return "Email inválido! Por favor, insira um endereço de email válido.";
        return null;
    }

    validatePassword() {
        if (!Validators.isValidPassword(this.password))
            return "Senha fraca! A senha deve conter pelo menos 8 caracteres.";
        return null;
    }

    validatePasswords() {
        if (!Validators.isPasswordMatch(this.password, this.confirmPassword))
            return "Senhas não coincidem! Por favor, verifique e tente novamente.";
        return null;
    }

    validateAge() {
        if (!this.birthDate) return "Selecione sua data de nascimento.";
        if (!Validators.isValidAge(this.birthDate))
            return "Apenas maiores de 16 anos podem se cadastrar!";
        return null;
    }

    validateTerms() {
        if (!this.terms)
            return "Você deve aceitar os termos e condições para criar uma conta.";
        return null;
    }

    calculatePasswordStrength(password) {
        return Validators.calculatePasswordStrength(password);
    }

    validateForm() {
        return this.validateName() || this.validateEmail() || this.validatePassword() 
            || this.validatePasswords() || this.validateAge() || this.validateTerms();
    }
}