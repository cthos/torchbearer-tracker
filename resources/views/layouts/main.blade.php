<html>
<head>
    <title>Torchbearer Tracker</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/bulma.css">
    <link rel="stylesheet" href="/css/app.css">

    <script src='/js/systemjs/dist/system-polyfills.js'></script>

    <script src='/js/zone.js/dist/zone.min.js'></script>
    <script src="/js/reflect-metadata/Reflect.js"></script>
    <script src='/js/systemjs/dist/system.js'></script>


    <script type="text/javascript">
        SystemJS.config({
            baseURL: '/js',
            map : {
                '@angular/core': '@angular/core/bundles/core.umd.js',
                '@angular/common': '@angular/common/bundles/common.umd.js',
                '@angular/compiler': '@angular/compiler/bundles/compiler.umd.js',
                '@angular/platform-browser': '@angular/platform-browser/bundles/platform-browser.umd.js',
                '@angular/platform-browser-dynamic': '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                '@angular/http': '@angular/http/bundles/http.umd.js',
                '@angular/router': '@angular/router/bundles/router.umd.js',
                '@angular/forms': '@angular/forms/bundles/forms.umd.js',
                'rxjs' : 'rxjs'
            },
            packages: {
                'rxjs' : { main: 'bundles/Rx.umd.js', defaultExtension: 'js' },
                'sheets/character' : {
                    paths: {
                        "*": "*.js"
                    }
                }
            }
        });

    </script>
</head>

<body>
<nav class="nav">
    <section class="nav-left">
        <a class="nav-item is-brand" href="#navbar" class="navbar-brand">Torchbearer Tracker</a>
    </section>
    <section class="nav-right">
    </section>
</nav>



@yield('content')
</body>

</html>