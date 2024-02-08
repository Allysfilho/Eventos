<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha aplicação Laravel com Vue.js</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <div id="app">
        <header>
            </header>

        <main>
            @yield('content')
        </main>

        <footer>
            </footer>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
