<template>
  <div>
    <p>This is my nuxt app</p>
    <p>{{ data2 }}</p>
    <form>
      <input type="text" v-model="slug">
    </form>
    <button @click="printText"> click me</button>
    <ul>
      <li v-for="(item, index) in postList" :key="index">
        <a > {{ item.title }} </a>
        <a > {{ item.description }} </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators';
import { Post } from '~/interfaces/dtos/post.dto';
// import { mapState } from 'vuex'
import CounterModule from '~/store/modules/CounterModule';
import PostModule from '~/store/modules/PostModule';

export default Vue.extend({
  data() {
    return {
      counterModule: getModule(CounterModule, this.$store),
      postModule: getModule(PostModule, this.$store),
      slug:'',
      data: {},
      data2: '',
    }
  },
  computed: {
    postList(): Post[]{
      return this.postModule.getPostList
    }
  },
  methods: {
    printText(){
      // this.counterModule.getTest();
      console.log('mta:',this.counterModule.getTest);

      // this.data2 = this.counterModule.getTest();
      console.log('data2:',this.data2);
      this.counterModule.getAllAction(this.slug).then((resp) => {
        this.data = resp;
        console.log('this is prinText method',this.data);
        this.data2 = this.counterModule.getTest
      }).catch(() => {
        console.log('something went wrong');
        this.data2 = 'something went wrong';
      })
    }
  }
})
</script>

