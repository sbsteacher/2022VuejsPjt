import axios from 'axios';

export default {
    methods: {
        async $api(url, param) {
            return (await axios({
                method: 'post',
                url,
                data: param
            }).catch(e => {
                console.error(e);
            })).data;
        },
        $base64(file) {
            return new Promise(resolve => {
                const fr = new FileReader();
                fr.onload = e => {
                    resolve(e.target.result);
                }
                fr.readAsDataURL(file);
            });
        }
    }
}