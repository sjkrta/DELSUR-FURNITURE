def password_check(password1, password2):
    if password1 != password2:
        return 'Passwords do not match.'
    elif len(password1) < 8:
        return 'Password length should be at least 8'
    elif not any(char.isdigit() for char in password1):
        return 'Password should have at least one numeral'
    elif not any(char.isupper() for char in password1):
        return 'Password should have at least one uppercase letter'
    elif not any(char.islower() for char in password1):
        return 'Password should have at least one lowercase letter'
    else:
        return ''