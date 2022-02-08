<div class="poster">
    <div class="header">
        <div>
            <p>saturday<br>december 13 1986<br>9 pm over 21</p>
            <p>at the rat<br>528 commonwealth<br>boston mass.</p>
        </div>
        <div>
            <h3>pixies</h3>
            <p>with<br>throwing muses<br>big dipper</p>
        </div>
    </div>
    <div class="artwork">
        <div class="artwork-wrapper">
            <div class="column">
                <div></div>
                <div></div>
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
            <div class="column">
                <div></div>
                <div></div>
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
            <div class="column">
                <div></div>
                <div></div>
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
            <div class="column">
                <div></div>
                <div></div>
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
            <div class="column">
                <div></div>
                <div></div>
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
            <div class="column">
                <div></div>
                <div></div>
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
            <div class="column">
                <div></div>
                <div></div>
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
            <div class="column">
                <div></div>
                <div></div>
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
            <div class="column">
                <div></div>
                <div></div>
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
            <div class="column">
                <div></div>
                <div></div>
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
            <div class="column">
                <div></div>
                <div></div>
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
</div>

<style>
    .poster {
        --poster-width: 400px;
        --poster-height: 600px;

        --black: #02000d;
        --green: #5ebd44;
        --white: #dee2d5;
        --circle: 36px;

        display: flex;
        flex-direction: column;
        width: var(--poster-width);
        height: var(--poster-height);
        font-family: neue-haas-grotesk-display, "Helvetica Neue", Helvetica, sans-serif;

        background-color: var(--green);
        color: var(--black);
        overflow: hidden;
    }

    p {
        margin: 0;
        line-height: 1.4;
    }

    .header {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 16px;
        font-size: 9px;
    }

    .header div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header div:last-child {
          margin-top: auto;
    }

    .header div p:last-child {
        width: 110px;
    }

    .header div:last-child p:last-child {
        margin-top: 16px;
        line-height: 1.1rem;
        font-size: 12px;
        color: var(--white);
    }

    h3 {
        margin: 0;
        font-size: 84px;
    }

    .artwork {
        margin-top: auto;
        height: 400px;
        background-color: var(--black);
    }

    .artwork-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -18px;
    }

    .column div {
        margin-bottom: 4px;
        margin-right: 4px;
        width: var(--circle);
        height: var(--circle);
        border-radius: var(--circle);
        background-color: var(--green);
    }

    .column div:last-child {
        margin-bottom: 0;
    }

    .column:last-child div {
        margin-right: 0;
    }

    .column:nth-child(2) div:not(:first-child):not(:last-child) {
        background-color: var(--white);
    }

    .column:nth-child(3) div:nth-child(n+3):not(:last-child) {
        background-color: var(--white);
    }

    .column:nth-child(4) div:nth-child(n+4):not(:last-child) {
        background-color: var(--white);
    }

    .column:nth-child(5) div:nth-child(n+5):not(:last-child) {
        background-color: var(--white);
    }

    .column:nth-child(6) div:nth-child(n+6):not(:last-child) {
        background-color: var(--white);
    }

    .column:nth-child(7) div:nth-child(n+7):not(:last-child) {
        background-color: var(--white);
    }

    .column:nth-child(8) div:nth-child(n+8):not(:last-child) {
        background-color: var(--white);
    }

    .column:nth-child(9) div:nth-child(n+9):not(:last-child) {
        background-color: var(--white);
    }

    .column:nth-child(10) div:nth-child(n+10):not(:last-child) {
        background-color: var(--white);
    }
</style>
