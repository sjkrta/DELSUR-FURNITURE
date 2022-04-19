from .views_imports import *

def register_view(request):
    if request.user.is_anonymous:
        first_name = ''
        last_name = ''
        username = ''
        email = ''
        error=''
        if request.method == 'POST':
            first_name = request.POST['first_name'].strip().capitalize()
            last_name = request.POST['last_name'].strip().capitalize()
            email = request.POST['email'].lower()
            username = request.POST['username'].strip().lower()
            password1 = request.POST['password1']
            password2 = request.POST['password2']
            if first_name == '':
                error = "First name is required."
            elif last_name == '':
                error = "Last name is required."
            elif email == '':
                error = "Email address is required."
            elif username == '':
                error = "Username is required."
            else:
                try:
                    user = User.objects.get(username=username)
                    error = 'Username already exists'
                except:
                    try:
                        user = User.objects.get(email=email)
                        error = 'Email address already exists.'
                    except:
                        result = password_check(password1, password2)
                        if result == '':
                            error = ''
                            user = User.objects.create_user(
                                first_name=first_name,
                                last_name=last_name,
                                username=username,email=email,
                                password=password1
                                )
                            login(request, user)
                            return redirect('home')
                        else:
                            error = result
        return render(request, 'accounts/register.html', {
            'error': error,
            'first_name': first_name,
            'last_name': last_name,
            'username': username,
            'email': email,
            })
    else:
        return redirect('home')

# login
def login_view(request):
    username = ''
    password = ''
    error = ''
    next =''
    if request.GET.get('next') is None:
        next='home'
    else:
        next =request.GET.get('next')
    if request.user.is_anonymous:
        if request.method == 'POST':
            username = request.POST['username'].strip().lower()
            password = request.POST['password']
            # login by username
            try:
                username = User.objects.get(username=username)
                user = authenticate(
                    request, username=username.username, password=password)
                if user is not None:
                    login(request, user)
                    return redirect(next)
                else:
                    error = 'Username / Password is incorrect.'
            except:
                pass
            # login by email
            try:
                username = User.objects.get(email=username)
                user = authenticate(
                    request,
                    username=username.username,
                    password=password
                    )
                if user is not None:
                    login(request, user)
                    return redirect(next)
                else:
                    error = 'Username / Password is incorrect.'
            except:
                pass
        context = {
            "error": error,
            "username": username
            }
        return render(request, 'accounts/login.html', context)
    else:
        return redirect(next)

# logout
def logout_view(request):
    logout(request)
    return redirect('login')

# forgot password
def forgotpassword_view(request):
    context = {}
    return render(request, 'accounts/forgotpassword.html', context)
