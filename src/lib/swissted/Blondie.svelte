<div class="poster">
	<div class="header">
		<p>thursday<br />july 17 1975 / all ages</p>
		<p>at cbgb and omfug<br />315 bowery, new york city</p>
		<p>with ramones,<br />tuff darts, talking heads</p>
	</div>
	<h3>blondie</h3>
	<div class="artwork">
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
	</div>
</div>

<style>
	.poster {
		--poster-width: 400px;
		--poster-height: 600px;

		--black: #270f2b;
		--white: #dbe1d5;
		--pink-100: #ed008c;
		--pink-200: #cb017b;
		--pink-300: #b6006f;
		--pink-400: #98005d;
		--pink-500: #7d004c;
		--pink-600: #630039;
		--pink-700: #460024;
		--pink-800: #060000;

		display: flex;
		flex-direction: column;
		width: var(--poster-width);
		height: var(--poster-height);
		font-family: neue-haas-grotesk-display, 'Helvetica Neue', Helvetica, sans-serif;

		background-color: var(--pink-100);
		color: var(--black);
	}

	.header {
		flex: 1;
		display: flex;
		padding: 16px;
	}

	.header p {
		margin: 0;
		padding: 0;
		line-height: 1.4;
		font-size: 9px;
		font-weight: bold;
	}

	.header p:nth-child(1) {
		padding-right: 16px;
	}

	.header p:nth-child(3) {
		text-align: right;
		flex: 1;
	}

	h3 {
		margin-top: auto;
		padding: 8px 16px;
		line-height: 0.9;
		font-size: 64px;
		color: var(--white);
	}

	.artwork {
		display: flex;
		flex-wrap: wrap;
		height: var(--poster-width);
	}

	.artwork > div {
		width: 100px;
		height: 100px;
	}

	.artwork div:nth-child(1) {
		background-color: var(--pink-200);
	}

	.artwork div:nth-child(2) {
		background-color: var(--pink-300);
	}

	.artwork div:nth-child(3) {
		background-color: var(--pink-400);
	}

	.artwork div:nth-child(4) {
		background-color: var(--pink-500);
	}

	.artwork div:nth-child(5) {
		background-color: var(--pink-300);
	}

	.artwork div:nth-child(6) {
		background-color: var(--pink-400);
	}

	.artwork div:nth-child(7) {
		background-color: var(--pink-500);
	}

	.artwork div:nth-child(8) {
		background-color: var(--pink-600);
	}

	.artwork div:nth-child(9) {
		background-color: var(--pink-400);
	}

	.artwork div:nth-child(10) {
		background-color: var(--pink-500);
	}

	.artwork div:nth-child(11) {
		background-color: var(--pink-600);
	}

	.artwork div:nth-child(12) {
		background-color: var(--pink-700);
	}

	.artwork div:nth-child(13) {
		background-color: var(--pink-500);
	}

	.artwork div:nth-child(14) {
		background-color: var(--pink-600);
	}

	.artwork div:nth-child(15) {
		background-color: var(--pink-700);
	}

	.artwork div:nth-child(16) {
		background-color: var(--pink-800);
	}
</style>
