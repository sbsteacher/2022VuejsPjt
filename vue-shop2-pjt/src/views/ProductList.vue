<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <select class="form-select">
            <option selected>---</option>
            <option value="1">노트북</option>
            <option value="2">모니터</option>
            <option value="3">마우스/키보드</option>
          </select>
        </div>
      </div>      
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6" 
            :key="product.id"
            v-for="product in productList">
            
            <div class="card" style="width: 18rem;">
              <a @click="goToDetail(product.id)" style="cursor:pointer;">
                <img :src="`/static/img/${product.id}/${product.type}/${product.path}`" 
                    class="card-img-top" 
                    alt="이미지">
              </a>
              <div class="card-body">
                <h5 class="card-title">{{ product.product_name }}</h5>
              </div>
            </div>

        </div>
      </div>

    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      productList: []
    }
  },
  methods: {
    async getProductList() {
      this.productList = await this.$get('/api/productList', {});
    }
  },
  created() {
    this.getProductList();
  }
}
</script>

<style>

</style>