'use strict';
// jQueryモジュール呼び出し
// 慣例的に$という変数に代入して使用する
// jQuery API Document : http://api.jquery.com/
const $ = require('jquery');

// jQueryを利用している
// ↓block = document.getElementById('block');と同じ
const block = $('#block');
// ↓block = document.getElementById('scaling-button');と同じ
const scalingButton = $('#scaling-button');
// 同上
const movingButton = $('#moving-button');
// scalingButtonをクリックすると引数の無名関数が発火する
scalingButton.click(() => {
  // blockをアニメーションさせる
  // 第二引数はミリ秒
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});
movingButton.click(() => {
  // N予備校のコードでは'marginLeft:'としていたが
  // クォーテーションなしで動いた
  // CSSと同じmargin-leftとしていないのは
  // ハイフンを文字列と解釈できないからのようだ
  // ちなみに'margin-left'と指定しても動かなかった
  // ○ marginLeft: '500px'
  // ○ 'marginLeft': '500px'
  // × margin-left: '500px'
  // × 'margin-left': '500px'
  block.animate({ marginLeft: '500px' }, 500);
  block.animate({ marginLeft: '20px' }, 1000);
})