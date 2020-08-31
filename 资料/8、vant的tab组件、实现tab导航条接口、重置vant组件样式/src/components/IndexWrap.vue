<template>
  <div class="title_div">

    <van-row type="flex" justify="space-between">
      <van-col span="5">
        <img class='logo' src="../assets/logo-img.png" />
      </van-col>
      <van-col @click='searchBtnFn' span="15" class='search_div'>
        <van-icon name="search" class='search_icon' size='.5rem' />
        <span>请输入用户名</span>
      </van-col>
      <van-col span="3">
        <van-button class='loginBtn' type="primary" size="mini">登录</van-button>
      </van-col>
    </van-row>

    <van-tabs v-model="active" swipeable class="tabBtnWrap">
      <van-tab v-for="n in tabBtnArr" :title="n">
        {{ n }}
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import '../assets/resetVant.css'
import axios from 'axios'

export default {
  name: 'IndexWrap',
  data(){
    return {
      active:'',
      tabBtnArr:[]
    }
  },
  created(){
      axios.get('http://localhost:3344/get_tabBtn_list')
        .then( _d=>{
            console.log( _d.data );
            this.tabBtnArr = _d.data;
        });
  },
  methods:{
    searchBtnFn(){
      this.$router.push('/searchPage')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title_div{
  padding: .23rem .2rem .23rem .4rem;
}
.logo{
  width: 1.84rem;height: .53rem;margin-top: .1rem;
}
.loginBtn{
  width: .98667rem;height: .53333rem;font-size: .32rem;
  line-height: .53333rem;
  text-align: center;
  color: #DD1A21;
  border: 1px solid #DD1A21;
  border-radius: .10667rem;
  background: #fff;margin: .1rem 0 0 0;
}
.search_div{
  font-size: .4rem;
  height: .75rem;
  background-color: #ededed;color: #666;
  border-radius: .11rem;
  display: flex;
  justify-content: center; 
  align-items: center;
}
.search_icon{
  margin:0 .2rem 0 0;
}

.tabBtnWrap{
  font-size: .35rem;
}
</style>
