/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// import Vue from 'vue/dist/vue.esm'

// document.addEventListener('DOMContentLoaded', () => {

//   console.log(app)

//   const app = new Vue({
//     el: '.displayed-character',
//     data: {
//       message: "あ"
//     }
//  })
// })

import Vue from 'vue/dist/vue.esm'
import { format } from 'upath';

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  console.log(app)
})

const app = new Vue({
  el: '.wrapper',//この要素の中を対象に処理を行う

  data: {//変数の初期値設定
    questionList: [//問題として表示される文字列の設定
      "apple",
      "grape",
      "lemon",
      "orange",
      "banana",
      "melon"
    ],
    question: "lrrlrrlrlr",//画面に最初に表示されている文字
    input: "",//答えを入力する欄の値
    playing: false,//ゲーム開始前
    question_count: 10,
    record_time: 0,
    start_time: 0,
    finish_time: 0,
    game_mode: 0
  },

  methods: {
    questions: function() {
      this.input = form.answer.value//入力した文字を代入
      if (this.question === this.input && this.playing === true){//入力した文字と問題の文字が同一の場合
        const rnd = Math.floor(Math.random() * this.questionList.length);//問題の数だけランダムに数字を発生
        this.question = this.questionList[rnd];//ランダムに発生した数字の配列の値を問題として表示させる
        form.answer.value = ""//入力フォームを初期化
        this.question_count -= 1//問題数のカウントダウン

        if (this.question_count === 0){//10問終了したら「おわり」ボタンと同じ処理
          this.end()
        }
      }
      else if (this.question === this.input && this.playing === false){
        this.game_mode = 1
        form.answer.value = ""
      }
      else{//入力文字列が異なる場合の処理
      }
    },

    start: function(){//はじめ！ボタンを押した後の処理
      this.question = "fruits"
      this.record_time = 0
      this.playing = true
      Vue.nextTick(() => {
        document.getElementById('input-typing').focus()//スタート後にカーソルを入力欄へ
      })
      this.start_time = Date.now()
    },

    end: function(){//おわり！ボタンを押した時の処理
      this.finish_time = Date.now()
      this.record_time = (this.finish_time - this.start_time) / 1000//経過時間を秒単位で表示
      this.playing = false
      this.question_count = 10
    }
  },
})


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
