<template>
  <div>
    <h1>BoxOfficeByDay</h1>
    <table>
      <thead>
        <tr>
          <th>순위</th>
          <th>제목</th>
          <th>개봉일</th>
          <th>누적관객수</th>
          <th>누적매출액</th>
        </tr>        
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.movieCd">
          <td>{{ item.rank }}</td>
          <td>{{ item.movieNm }}</td>
          <td>{{ item.openDt }}</td>
          <td>{{ item.audiAcc }}</td>
          <td>{{ item.salesAcc }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    async getData() {      
      const data = await this.getBoxOfficeByDay('20211212')
      this.list = data.boxOfficeResult.dailyBoxOfficeList;
    }
  },
  created() {
    this.getData();
  }
}
</script>

<style scoped>

</style>