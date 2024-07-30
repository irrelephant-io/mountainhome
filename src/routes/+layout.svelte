<style>
    :root {
        --main-font-family: Donegal One;
        --alt-font-family: Farsan;

        --main-border: 1px solid #000;
        --main-border-radius: 15px;

        --color-bg-rare: #ffe8ae;
    }

    * {
        font: normal 16px var(--main-font-family);
    }
</style>

<nav>
    <a href="/">home</a>
    |
    <a href="/card-builder">card builder</a>
    |
    <a href="/library">library</a>
    |
    <a href="/cost">cost</a>
    |
    <a href="/text">text</a>
</nav>

<slot></slot>