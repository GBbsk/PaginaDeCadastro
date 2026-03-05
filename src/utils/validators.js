export const Validators = {

    isValidName: (name) => {
        return name.length > 3;
    },

    isValidEmail: (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    },

    isValidPassword: (password) => {
        return password.length >= 8;
    },

    isPasswordMatch: (password, confirmPassword) => {
        return password === confirmPassword;
    },

    isValidAge: (birthDate, minAge = 16) => {
        const [year, month, day] = birthDate.split("-");
        const birth = new Date(year, month - 1, day);
        const today = new Date();

        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age >= minAge;
    },

    calculatePasswordStrength: (password) => {
        if (!password) return 0;

        let strength = 0;
        strength += Math.min(password.length * 4, 40);
        if (/[a-z]/.test(password)) strength += 10;
        if (/[A-Z]/.test(password)) strength += 20;
        if (/[0-9]/.test(password)) strength += 15;
        if (/[^A-Za-z0-9]/.test(password)) strength += 15;

        return Math.min(strength, 100);
    }
};