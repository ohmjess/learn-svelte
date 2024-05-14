<script>
	// import bootstrap from 'bootstrap';
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { onMount } from 'svelte';

	export let data;
	export let form;

	/**
	 * @type {HTMLParagraphElement | null}
	 */
	let message; // Declare message variable outside onMount

	function hideMessage() {
		if (message) {
			message.style.display = 'none';
		}
	}

	onMount(() => {
		message = document.querySelector('p'); // Access document only in onMount
		if (form?.success) {
			setTimeout(hideMessage, 1000);
		}
	});

	let showPassword = false;

	function togglePassword() {
		showPassword = !showPassword;
	}
</script>

<!-- <div class="container-fluid p-5 vh-100">
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:w-full sm:mx-auto sm:max-w-sm">
          <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" class="mx-auto h-10 w-auto">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div class="mt-10 sm:w-full sm:mx-auto sm:max-w-sm">
          <form action="?/login" method="POST" class="space-y-6">
              <div class="relative w-full">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                      <input id="email" name="email" type="email" autocomplete="email" placeholder="email" class="appearance-none border-2 rounded w-full py-3 px-2 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 pr-16 font-mono" required>
                  </div>
              </div>
              <div>
                <label class="block text-sm font-medium leading-6 text-gray-900">password</label>
                <div class="relative w-full mt-2"> 
                  <div class="absolute inset-y-0 right-2 flex items-center">
                    <input type="checkbox" id="toggle" class="hidden" on:click={togglePassword}>
                    <label for="toggle"><i class="{showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'} cursor-pointer"></i></label>
                  </div>
                  <input name="password" type="{showPassword ? 'text' : 'password'}" class="appearance-none border-2 rounded w-full py-3 px-2 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono" id="password" placeholder="password" autocomplete="off" required>
                </div>
              </div>
              <div class="flex justify-end">
                <button type="submit" class="bg-blue-400 py-2 px-2 rounded hover:bg-blue-500 text-white" >Submit</button>
              </div>
          </form>
          <a href="/home"><p>you don't have any account</p></a>
      </div>
  </div>
</div> -->

<!-- <div class="vh-100">
  <div class="container h-100 py-10">
    <div class="row bg-primary"></div>
  </div>
</div> -->

<div class="h-screen">
	<div class="container flex justify-center items-center h-screen">
		<div class="w-full lg:max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
			<form class="space-y-6" action="?/login" method="post">
				<h5 class="text-xl font-medium text-center text-gray-900 dark:text-white">Login</h5>
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
					<input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
				</div>
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
					<div class="relative">
						<div class="absolute inset-y-3 right-2 flex item-center">
							<input type="checkbox" id="toggle" class="hidden" on:click={togglePassword}>
							<label for="toggle"><i class="{showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'} cursor-pointer"></i></label>
						</div>
						<input type="{showPassword ? 'text' : 'password'}" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
					</div>
				</div>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Login</button>
			</form>
		</div>
		 
	</div>
</div>

{#if form?.success}
	<p>login success</p>
{/if}
