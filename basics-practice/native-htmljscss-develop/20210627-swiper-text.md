纵向轮播的文字效果

[https://www.bilibili.com/video/BV1qV411j7yQ](https://www.bilibili.com/video/BV1qV411j7yQ)

[https://codepen.io/iola1999/pen/jOBgvxL](https://codepen.io/iola1999/pen/jOBgvxL)


```html
<h2>
  周一二三四五中午吃什么
  <div class="mask">
    <span data-show>满丼</span>
    <span>好胜客</span>
    <span>负一楼</span>
    <span>美团外卖</span>
  </div>
</h2>
```


```scss
h2 {
  width: 800px;
  font-size: 100px;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #1d1d1f;
}

.mask {
  height: 106px;
  // border: 1px solid red;
  position: relative;
  overflow: hidden;
  span {
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: 100px;
    // backgground-size: 100% 100%;
    // backgoung-clip: text;

    &[data-up] {
      transform: translateY(-200%);
      transition: 0.5s transform ease-in-out;
    }

    &[data-show] {
      transform: translateY(-100%);
      transition: 0.5s transform ease-in-out;
    }

    &:nth-child(1) {
      color: red;
    }
    &:nth-child(2) {
      color: green;
    }
    &:nth-child(3) {
      color: blue;
    }
    &:nth-child(4) {
      color: yellow;
    }
  }
}

```

```javascript
setInterval(()=>{
  const showItem = document.querySelector("span[data-show]");
  const nextItem = showItem.nextElementSibling || document.querySelector("span:first-child");
  const upItem = document.querySelector("span[data-up]");
  if(upItem){
    upItem.removeAttribute("data-up");
  }
  showItem.removeAttribute("data-show");
  showItem.setAttribute("data-up", "");
  nextItem.setAttribute("data-show", "");
}, 2000)
```