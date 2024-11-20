<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	let name = $state('Hello');
</script>

<section class="p-24">
	<h1>{name}</h1>
	<input bind:value={name} />
	<Button onclick={() => (name = 'World')}>Change name</Button>
</section>
