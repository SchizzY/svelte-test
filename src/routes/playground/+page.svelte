<script>
	let name = $state('Hello');
</script>

<section class="p-24">
	<h1>{name}</h1>
	<input bind:value={name} />
	<button onclick={() => (name = 'World')}>Change name</button>
</section>
