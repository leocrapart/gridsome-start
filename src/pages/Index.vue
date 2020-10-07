<template>
  <Layout>
    <PresentationCard class="m-4"/>

    <div class="grid grid-cols-2 gap-4 m-4">
		<ProductCard v-for="product of products"
		:key="product.url"
		:product="product" />
		
	  </div>


  </Layout>
</template>

<script>
import PresentationCard from '../components/presentationCard'
import ProductCard from '../components/productCard'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    PresentationCard,
    ProductCard
  },
  data() {
    return {
      products: [
        {
          title: 'Framboise',
          url: '/framboise',
          imagePath: 'https://ik.imagekit.io/pl6zwucqxr/confiture-figues_0Zmf392RWZU.jpg'
        },
        {
          title: 'Fraise',
          url: '/fraise',
          imagePath: 'https://ik.imagekit.io/pl6zwucqxr/confiture-figues_0Zmf392RWZU.jpg'
        }
      ]
    }
  }
}
</script>
