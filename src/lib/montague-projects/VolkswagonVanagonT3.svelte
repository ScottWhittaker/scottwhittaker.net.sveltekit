<div class="poster">
	<h3>1979<br />Volkswagen<br />Vanagan<br />T3</h3>
	<div class="vw">
		<div class="vw__windscreen" />
		<div class="vw__wing-mirrors">
			<div />
			<div class="flip-h" />
		</div>
		<div class="vw_outer-grille-wrapper">
			<div class="vw__badge" />
			<div class="vw_inner-grille-wrapper">
				<div class="vw__headlight" />
				<div class="vw__grille">
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
				<div class="vw__headlight" />
			</div>
		</div>
		<div class="vw__side-lights">
			<div />
			<div>
				<div class="vw__side-light" />
				<div class="vw__side-light" />
			</div>
			<div />
		</div>
		<div class="vw__bumper">
			<div />
			<div />
			<div />
			<div />
		</div>
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
		background-color: #ea1f46;
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
	.vw {
		--black: #010101;
		--white: #fff;
		--red: #ea1f46;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	.vw__windscreen {
		width: 378px;
		height: 184px;
		background-color: var(--black);
		border-radius: 6% 6% 1% 1% / 5% 5% 4% 4%;
		transform: perspective(800px) rotateX(36deg);
	}
	.vw__wing-mirrors {
		display: flex;
		justify-content: space-between;
		width: 500px;
		margin-top: -64px;
	}
	.vw__wing-mirrors > div {
		position: relative;
		width: 28px;
		height: 44px;
		border-radius: 4px;
		background-color: var(--black);
	}
	.vw__wing-mirrors > div:after {
		content: '';
		position: absolute;
		width: 6px;
		height: 22px;
		background-color: #010101;
		bottom: -12px;
		right: -4px;
		transform: rotate(135deg);
		border-radius: 2px;
	}
	.vw_outer-grille-wrapper {
		position: relative;
		margin-top: 55px;
		padding: 4px;
		width: 430px;
		border: 2px solid var(--black);
		border-radius: 4px;
	}
	.vw__badge {
		--dimension: 32px;
		position: absolute;
		left: calc(50% - var(--dimension) / 2);
		top: calc(50% - var(--dimension) / 2);
		width: var(--dimension);
		height: var(--dimension);
		border-radius: 100%;
		background-color: var(--black);
	}
	.vw_inner-grille-wrapper {
		display: flex;
		align-items: center;
		padding: 4px;
		height: 100%;
		background-color: var(--black);
		border-radius: 8px;
	}
	.vw__headlight {
		--dimension: 42px;
		width: var(--dimension);
		height: var(--dimension);
		background-color: #fff;
		border-radius: 100%;
	}
	.vw__grille {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 4px;
		height: 40px;
	}
	.vw__grille > div {
		width: 100%;
		height: 3px;
		background-color: var(--red);
	}
	.vw__side-lights {
		margin-top: 12px;
		width: 450px;
	}
	.vw__side-lights > div:nth-child(1),
	.vw__side-lights > div:nth-child(3) {
		height: 3px;
		border-radius: 3px;
		background-color: var(--black);
	}
	.vw__side-lights div:nth-child(2) {
		display: flex;
		justify-content: space-between;
	}
	.vw__side-light {
		margin: 8px 0 16px 0;
		width: 22px;
		height: 30px;
		background-color: var(--white);
		border: 2px solid var(--black);
		border-radius: 4px;
	}
	.vw__bumper {
		--radius: 4px;

		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 12px;
		width: 450px;
		height: 28px;
		background-color: var(--black);
	}
	.vw__bumper > div {
		margin-top: 2px;
		width: 30%;
		height: 10px;
		background-color: var(--red);
	}
	.vw__bumper > div:nth-child(1),
	.vw__bumper > div:nth-child(4) {
		position: absolute;
		width: 24px;
		height: 38px;
		background-color: var(--black);
		border: 2px solid var(--red);
		border-radius: var(--radius);
	}
	.vw__bumper > div:nth-child(1) {
		left: -8px;
		transform: rotate(-12deg);
	}
	.vw__bumper > div:nth-child(4) {
		right: -8px;
		transform: rotate(12deg);
	}
	.vw__bumper > div:nth-child(2) {
		border-top-right-radius: var(--radius);
		border-bottom-right-radius: var(--radius);
	}
	.vw__bumper > div:nth-child(3) {
		border-top-left-radius: var(--radius);
		border-bottom-left-radius: var(--radius);
	}
</style>
