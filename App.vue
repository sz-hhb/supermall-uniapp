<script>
	export default {
		onLaunch: function() {
			console.log("App Launch")
		},
		onShow: function() {
			console.log("App Show")
		},
		onHide: function() {
			console.log("App Hide")
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		height: 100%;

		/* &::-webkit-scrollbar {
			display: none;
		} */
	}

	/* html,
	body {
		height: unset;
		overflow: unset;
	} */

	scroll-view ::-webkit-scrollbar {
		display: none !important;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>