<template>
    <Layout>
    <div>
        Shop as test page for graphql

    </div>

    <div>

        <g-image :src="$page.product.edges[0].node.image[0].url"/>
    </div>

    </Layout>
</template>

<page-query>
query {
    product: allProducts(filter:{name:{eq: "Cerise"}}) {
        edges {
            node {
                url
                image {
                    url
                }
            }
        }
    }
}

</page-query>

<script>
export default {
    metaInfo: {
        title: 'Shop'
    },
    data() {
        return {
            urlname: null
        }
    }
}
</script>

