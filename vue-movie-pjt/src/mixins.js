import axios from 'axios';

export default {
    data() {
        return {
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
        }
    },
    methods: {
        async $api(url, data) {
            return (await axios({
                method: 'get',
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        },
        async getBoxOfficeByDay() {
            return await this.$api(this.baseUrl + this.boxOfficeByDay, {});
        }
    }
}