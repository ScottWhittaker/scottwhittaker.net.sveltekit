<div class="poster">
    <h3>1971<br>Land Rover<br>Series III</h3>
    <div class="land-rover">
        <div class="land-rover__windscreen">
            <div></div>
            <div></div>
        </div>
        <div class="land-rover__vents">
            <div></div>
            <div></div>
        </div>
        <div class="land-rover__wing-mirrors">
            <div class="land-rover__wing-mirror flip-h">
                <div class="land-rover__mirror"></div>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="land-rover__mirror-arm">
                    <path d="M 20 90 L 20 60 L 80 40" fill="transparent" />
                </svg>
            </div>
            <div class="land-rover__wing-mirror">
                <div class="land-rover__mirror"></div>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="land-rover__mirror-arm">
                    <path d="M 20 90 L 20 60 L 80 40" fill="transparent" />
                </svg>
            </div>
        </div>
        <div class="land-rover__nose">
            <div class="land-rover__lights">
                <div class="land-rover__side-light"></div>
                <div class="land-rover__headlight">
                    <div></div>
                </div>
                <div class="land-rover__side-light land-rover__side-light__two"></div>
            </div>
            <div class="land-rover__grill"></div>
            <div class="land-rover__lights flip-h">
                <div class="land-rover__side-light"></div>
                <div class="land-rover__headlight">
                    <div></div>
                </div>
                <div class="land-rover__side-light side-light__two"></div>
            </div>
        </div>
        <div class="land-rover__bumper"></div>
    </div>
</div>

<style>
    .poster {
        --width: 560px;
        --height: 760px;

        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 32px 0;
        width: var(--width);
        height: var(--height);
        background-color: #bd1a8d
    }
    h3 {
        flex-grow: 1;
        align-self: flex-start;
        margin: 0 32px;
        color: #fff;
        font-size: 32px;
        line-height: 32px;
        letter-spacing: -1px;
        font-family: 'Public Sans', sans-serif;
    }
    .flip-h {
        transform: scaleX(-1);
    }
    .land-rover {
        --black: #010101;
        --white: #fff;
        --bumper-width: 460px;
        --bumper-height: 32px;
        --width: 560px;
        width: var(--width);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }
    .land-rover__windscreen,
    .land-rover__vents {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 12px;
        width: 380px;
        gap: 12px;
    }
    .land-rover__windscreen > div {
        height: 0;
        border-bottom: 80px solid var(--black);
    }
    .land-rover__windscreen > div:first-child {
        border-left: 10px solid transparent;
    }
    .land-rover__windscreen > div:last-child {
        border-right: 10px solid transparent;
    }
    .land-rover__vents > div {
        height: 24px;
        border: 2px solid var(--black);
        border-radius: 8px;
    }
    .land-rover__wing-mirrors {
        display: flex;
        justify-content: space-between;
        width: 460px;
        margin-top: -12px;
    }
    .land-rover__wing-mirror {
        position: relative;
    }
    .land-rover__mirror {
        position: absolute;
        top: -10px;
        left: 32px;
        width: 34px;
        height: 50px;
        background-color: var(--black);
        border-top-left-radius: 32px 10px;
        border-top-right-radius: 32px 10px;
        border-bottom-left-radius: 32px 10px;
        border-bottom-right-radius: 32px 10px;
    }
    .land-rover__mirror-arm {
        --square: 48px;
        width: var(--square);
        height: var(--square);
        stroke-width: 4px;
        stroke-linejoin: round;
        stroke-linecap: round;
        stroke: var(--black);
    }
    .land-rover__nose {
        display: grid;
        grid-template-columns: 100px 220px 100px;
        gap: 4px;
        align-items: center;
        width: 428px;
        margin-top: -14px;
    }
    .land-rover__grill {
        width: 220px;
        height: 118px;
        background-color: var(--black);
        border-top-left-radius: 64px 8px;
        border-top-right-radius: 64px 8px;
    }
    .land-rover__lights {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr 1fr;
        padding: 4px;
        margin-top: 24px;
        width: 100px;
        height: 84px;
        border: 2px solid var(--black);
        border-radius: 8px;
    }
    .land-rover__headlight {
        align-self: center;
        grid-row: span 2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 62px;
        height: 62px;
        border-radius: 12px;
        background-color: var(--black);
    }
    .land-rover__headlight>div {
        --square: 48px;
        width: var(--square);
        height: var(--square);
        border-radius: var(--square);
        background-color: var(--white);
    }
    .land-rover__side-light {
        --square: 20px;
        width: var(--square);
        height: var(--square);
        border-radius: var(--square);
        background-color: var(--white);
        border: 2px solid var(--black);
    }
    .land-rover__side-light__two {
        align-self: center;
    }
    .land-rover__bumper {
        margin-top: 18px;
        width: var(--bumper-width);
        height: var(--bumper-height);
        border-radius: 6px;
        background-color: var(--black);
    }
</style>
