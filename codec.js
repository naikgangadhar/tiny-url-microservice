
module.exports  =  class Codec{
    constructor(){
       let base62 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        this.base62 = base62.split('');
    }

    async encode(primary_id) {
        let base_62_digits = [];
        let tiny_url = "";
        while(primary_id > 0){
            base_62_digits.push(primary_id %62);
            primary_id = parseInt(primary_id / 62);
        }
        base_62_digits.forEach(element => {
            tiny_url += this.base62[element];
        });
        return tiny_url;   
    }

    async decode(tiny_url) {
        let base_62_digits = tiny_url.split('');
        let primary_id = 0;
        base_62_digits.forEach((value , key) => {
            primary_id += Math.pow(62, key) * this.base62.indexOf(value);
        });
        return primary_id;
    }
}