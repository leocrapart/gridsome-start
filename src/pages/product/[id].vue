<template>
    <Layout>
        <div>Product page</div>
        <div>{{$route.params}}</div>

        <div>{{brews}}</div>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'produit'
    },

    data() {
        return {
            user: null,
            brews: null
        }
    },
    async mounted() {

        const res = await fetch("https://api.openbrewerydb.org/breweries/")

        this.brews = await res.json()
    }
}
</script>