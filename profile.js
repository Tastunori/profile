var app = new Vue({
  el: '#app',
  data: {
    message: "Tatsunori Teramoto's profile",
    img1:"profile.jpg"
  },
  methods:{
    kaiten: function(message){
      this.show = !this.show
    }
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    show_contents: [],
  },
    methods: {
    toggle: function (data) {
      if (this.show_contents.indexOf(data) >= 0) {
        this.show_contents = this.show_contents.filter(n => n !== data)
      }
      else {
        this.show_contents.push(data)
      }
       
    }
  }
})
