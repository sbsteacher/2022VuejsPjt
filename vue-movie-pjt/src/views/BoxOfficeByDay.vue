<template>
  <h1>BoxOfficeByDay</h1>
</template>

<script>
export default {
  methods: {
    async getData() {      
      const list = await this.getBoxOfficeByDay('20211212')
      console.log(list);      
    }
  },
  created() {
    this.getData();
  }
}
</script>

<style>

</style>