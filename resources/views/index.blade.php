<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SpaceX</title>
        <link rel="shortcut icon" href="./../js/assets/">
        <link rel="preconnect" href="https://fonts.googleapis.com/logo.png">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">
        @viteReactRefresh
        @vite(["resources/css/index.css", "resources/js"])
    </head>
    <body>
      <div id="root"></div>
    </body>
</html>
