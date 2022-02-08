<div class="poster">
    <div class="artwork">
        <div class="artwork-wrapper">
            <div class="col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    </div>
    <h3>talking heads</h3>
    <div class="footer">
        <p>friday, saturday, sunday<br>september 12, 13, 14, 1975</p>
        <p>at cbgb and omfug<br>315 bowery, new york city</p>
        <p>also appearing:<br>from brooklyn, the shirts</p>
    </div>
</div>

<style>
    .poster {
        --poster-width: 400px;
        --poster-height: 600px;

        --orange: #ef490f;
        --white: #dde1d5;
        --yellow: #ffd101;

        display: flex;
        flex-direction: column;
        width: var(--poster-width);
        height: var(--poster-height);
        font-family: neue-haas-grotesk-display, "Helvetica Neue", Helvetica, sans-serif;

        background-color: var(--orange);
        color: var(--white);
    }

    .artwork {
        position: relative;
        background-color: var(--white);
        border-bottom: var(--poster-width) solid var(--yellow);
        border-left: var(--poster-width) solid transparent;
    }

    .artwork-wrapper {
        display: flex;
        position: absolute;
        left: calc(var(--poster-width) * -1);
    }

    .artwork-wrapper .col div {
        width: calc(var(--poster-width) / 9);
        height: calc(var(--poster-width) / 9);
        border-top: calc(var(--poster-width) / 9) solid var(--orange);
        border-right: calc(var(--poster-width) / 9) solid transparent;
    }

    h3 {
        margin: 0;
        padding: 0 16px;
        font-size: 38px;
    }

    .footer {
        display: flex;
        margin-top: auto;
        padding: 16px;
    }

    .footer p {
        line-height: 1.4;
        font-size: 8px;
        font-weight: bold;
    }

    .footer p:nth-child(1) {
        padding-right: 16px;
    }

    .footer p:nth-child(2) {
        flex: 1;
    }
</style>
