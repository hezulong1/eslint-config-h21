<template>
  <Foo :word="word" >
    <bar readWord=""></bar>
  </Foo>
</template>

<script>
export default {
  name: 'foo',
  props:{
    word:String
  },
  data() {
    return {
      word1:"",
      word2:'',
      word3:``
    }
  },
  methods: {

  },
}
</script>
