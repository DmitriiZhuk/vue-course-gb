<template>
    <div>
        <div class="container kitchens">
            <h2>{{ product.name }}</h2>
            <p>{{ formattedPrice }}</p>
            <p :class="{ 'out-of-stock': !product.available }">
                {{ product.available ? "Available" : "Out of stock" }}
            </p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "ProductDetails",
    data() {
        return {
            product: {
                name: "Валенки",
                price: 99.99,
                available: true
            }
        }
    },

    computed: {
        formattedPrice() {

            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            return formatter.format(this.product.price);
        },
    },
};
</script>
  
<style scoped>
.out-of-stock {
    color: red;
}
</style>
  