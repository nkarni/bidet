<template>
	<header 
	v-if="hideHeader"
	class="header bg-light border-bottom"
		:class="{
			'navbar-top':    scrollPosition < scrollOffset,
			'navbar-scroll': scrollPosition > scrollOffset,
			'navbar-open':   navbarOpen
		}"
	>
		<nav class="navbar navbar-light navbar-expand-md">
			<div class="container">
				<NuxtLink to="/" class="navbar-brand">
					 <b-navbar-brand to="/">
						<img
							class="logo"
							src="~/assets/img/logo-dark.svg"
							alt="AI Bidet Logo"
							v-if="this.$route.path"
						>
					</b-navbar-brand>
				</NuxtLink>

				<button @click="navbarOpen = !navbarOpen" type="button" class="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<i class="bi bi-list fs-1"></i>
				</button>

				<div id="navbarCollapse" class="navbar-collapse collapse flex-grow-0 ms-auto">
					<ul class="navbar-nav">
						<li v-for="item in menu" :key="item.name">
							<NuxtLink :to="item.to" class="nav-link">{{ item.name}}</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				navbarOpen:     false,
				scrollOffset:   100,
				scrollPosition: 0,
				menu: [
					{ name: 'Logout', to: '#' }
				]
			}
		},

		methods: {
			updateScroll() {
			this.scrollPosition = window.scrollY
			}
		},

		computed: {
			hideHeader() {
				console.log(this.$route.path)
				console.log(['/','/register'].indexOf(this.$route.path))
				return ['/','/register'].indexOf(this.$route.path) < 0
			}
		},
		
		mounted() {
			this.updateScroll();
			window.addEventListener('scroll', this.updateScroll);
		}
	}
</script>