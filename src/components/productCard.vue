<template>
	<g-link :to="admin ? '/admin/'+ product.url : '/product' + product.url">
		<div class="flex flex-col bg-gray-200 bg-opacity-75 rounded">
			<div class="relative rounded-t-lg" style="padding-bottom: 50%">
				<img :src="product.imagePath" alt="No image corresponding"
				class="absolute object-cover w-full h-full rounded-t">
			</div>
			<div class="px-4 py-1 font-semibold leading-4 text-center">{{ product.title }}</div>
		</div>
	</g-link>
	
</template>

<script>
export default {
	props: {
		product: Object,
		admin: {
			default: false,
			type: Boolean
		}
	}
}
</script>