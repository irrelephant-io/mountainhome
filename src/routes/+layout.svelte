<style>
    @import '../sizes.css';
    
    :root {
        --main-font-family: Donegal One;
        --alt-font-family: Farsan;

        --main-border: 1px solid #000;
        --color-bg-rare: #ffe8ae;
    }

    * {
        font: normal 16px var(--main-font-family);
    }

    nav {
        text-align: center;
    }
</style>

<nav>
    <a href="/">home</a>
    |
    <a href="/card-builder">card builder</a>
</nav>

<slot></slot>