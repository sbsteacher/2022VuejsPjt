<template>
  <tr>
    <td>{{ item.rank }}</td>
    <td>{{ item.movieNm }}</td>
    <td>{{ item.openDt }}</td>
    <td class="align-right">{{ audiAccComma }}</td>
    <td class="align-right">{{ salesAccComma }}</td>
</tr>
</template>

<script>
export default {
    props: {
        item: Object
    },
    computed: {
        audiAccComma() {
            return this.getNumberWithComma(this.item.audiAcc);
        },
        salesAccComma() {
            return this.getNumberWithComma(this.item.salesAcc);
        }
    }
}
</script>

<style>

</style>