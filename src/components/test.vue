<template>
    <div id="myName">
       <h1>Hazyzh</h1>
       <h3 v-html="message"></h3>
       <input v-model="newItem" v-on:keyup.enter="addNew">
       <ul>
          <li v-for="item in lists" v-bind:class="{finished:item.isFinished,red:item.isFinished}" v-on:click="toggleFinish(item,$event)">
            {{item.label}}
          </li>
        </ul>
    </div>
  
</template>

<script>
    import Stroage from './storage.js';
    export default {
      data : function(){
        return {
          message: 'This is a to do lists',
          lists:Stroage.fetch(),
          newItem:''
        }
      },
      watch:{
        lists:{
          handler:function(val){
            Stroage.save(val);
          },
          deep:true,
        }
      },
      methods:{
        toggleFinish:function(item){
          item.isFinished = !item.isFinished;
        },
        addNew:function(){
          var obj = {
            label:this.newItem,
            isFinished:false
          }
          this.lists.push(obj);
          this.$emit('child-tell-me-something',this.newItem);
          this.newItem = '';
        }
      }
    }
</script>
<style scoped>
    ul{
      list-style: none;
    }
    .finished{
      text-decoration: underline;
    }
    .red{
      color: red
    }
</style>