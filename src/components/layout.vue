<template>
	<div class="app">
		<header>
			<slot name="header"></slot>
		</header>
		<hr>
		<body>
			<slot></slot>
		</body>
		<hr>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>