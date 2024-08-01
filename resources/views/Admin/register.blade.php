<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Register</title>
</head>
<body>

<form action="{{ route('admin.register') }}" method="POST">
    @csrf
    <div class="form-control">
        <label for="name">Enter your name</label>
        <input type="text" name="name" id="name">
    </div>
    <div class="form-control">
        <label for="email">Enter your email</label>
        <input type="email" name="email" id="email">
    </div>
    <div class="form-control">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
    </div>

    <button class="btn btn-primary" type="submit">Save</button>
</form>
    
</body>
</html>