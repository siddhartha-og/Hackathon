<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login | Smart Factory</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
</head>
<body>

<div class="login-container">
    <h1>Smart Factory</h1>
    <p>Login to Dashboard</p>

    <form onsubmit="login(event)">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Login</button>
        <p id="error"></p>
    </form>
</div>

<script src="login.js"></script>
</body>
</html>
