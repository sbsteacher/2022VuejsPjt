<template>
  <div>
    <div>
        <h1>이벤트 클릭</h1>
        <button @click="increaseCnt(); printConsole();">Add 1</button>
        <p>The counter is : {{ cnt }}</p>
    </div>
    <div>
        {{ selectedValue }}
        <select v-model="selectedValue" @change="changeSelect">
            <option>서울</option>
            <option>부산</option>
            <option>제주</option>
        </select>
    </div>
    <div>
        {{ txtVal }}
        <input type="txtVal" v-model="txtVal" 
        @keyup="changeTxtVal" 
        @keyup.enter="enterTxtVal">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            txtVal: '',
            selectedValue: '',
            cnt: 0
        }
    },
    methods: {
        enterTxtVal() {
            console.log('Enter!!!');
        },
        changeTxtVal() {
            console.log(this.txtVal);
        },
        changeSelect() {
            alert(this.selectedValue);
        },
        increaseCnt() {
            this.cnt++;
        },
        printConsole() {
            console.log(this.cnt);
        }
    }
}
</script>

<style>

</style>
