import axios from 'axios';

export default {
    data() {
        return {
            key: 'cc1e6045dc81b1e1955cc52c3af43278',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek: 'boxoffice/searchWeeklyBoxOfficeList.json'
        }
    },
    methods: {
        async $api(url, parameter) {
            return (await axios.get(url, {
                params: parameter
            })            
            .catch(e => {
                console.log(e);
            })).data;
        },
        async getBoxOfficeByDay(targetDt) {
            const parameter = {
                key: this.key,                
                targetDt
            }
            const url = this.baseUrl + this.boxOfficeByDay;
            return await this.$api(url, parameter);
        },        
        async getBoxOfficeByWeek(targetDt, weekGb) {
            const parameter = {
                key: this.key,
                targetDt,
                weekGb
            }
            const url = this.baseUrl + this.boxOfficeByWeek;
            return await this.$api(url, parameter);
        },
        getOnlyDateStr(date) {            
            return date.toISOString().split('T')[0];
        },
        getNumberWithComma(num) {
            return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }        
    }
}