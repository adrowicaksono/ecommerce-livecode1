const Create = {
    template : `
            <div style="display:flex; flex-direction:column;">
                <input type="text" placeholder="name" v-model="name">
                <input type="text" placeholder="price" v-model="price">
                <input type="text" placeholder="stock" v-model="stock">
                <input type="text" placeholder="tags" v-model="tags">
                <button v-on:click="upload">create</button>
            </div>
    `,
    data () {
        return {
            name : '',
            price: '',
            stock : '',
            tags : [],
        }
    },
    methods:{
        upload () {
            let obj = {
                name : this.name,
                price : this.price,
                stock : this.stock,
                tags : this.tags
            }
            
            axios
            .post('http://localhost:3000', obj,{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            })
            .then ( response => {
                console.log(response)
            })
            .catch( err => {
                console.log(err)
            })
        },
        
    }
}