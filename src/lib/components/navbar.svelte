<script>
	import '../../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<div
	class="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
>
	<h1 class="text-2xl font-bold">Your Brand Name</h1>


	<nav class="flex items-center space-x-4 justify-between">
		<a href="/" class="hover:text-gray-200">Home</a>
		<a href="/" class="hover:text-gray-200">About</a>
		<a href="/" class="hover:text-gray-200">Services</a>
		<a href="/" class="hover:text-gray-200">Contact</a>
	  </nav>
	  
	  <button id="menu-toggle" class="focus:outline-none md:hidden" on:click={toggleMenu}>
		<svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
		  <path d="M4 6h16v12H4zm0-6a2 2 0 110-4 2 2 0 010 4zM16 18h-2a2 2 0 110-4 2 2 0 010 4z"></path>
		</svg>
	  </button>
	  
	  <nav id="mobile-menu" class="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto px-6 py-4 transition duration-300 ease-in-out transform {menuOpen ? '' : 'translate-x-full'}">
		<div class="flex flex-col justify-between h-full">  <div class="grid justify-items-end">
			<button on:click={toggleMenu}>Close</button>
		  </div>
		  <div class="flex flex-col space-y-4 px-4 pb-4">  <a href="/" class="block py-2 text-xl font-medium text-gray-700 hover:text-gray-800">Home</a>
			<a href="/" class="block py-2 text-xl font-medium text-gray-700 hover:text-gray-800">About</a>
			<a href="/" class="block py-2 text-xl font-medium text-gray-700 hover:text-gray-800">Services</a>
			<a href="/" class="block py-2 text-xl font-medium text-gray-700 hover:text-gray-800">Contact</a>
		  </div>
		</div>
	  </nav>
	  
</div>


<slot />
