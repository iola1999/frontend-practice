[https://www.bilibili.com/video/BV1t741127Vk](https://www.bilibili.com/video/BV1t741127Vk)

[https://codepen.io/iola1999/pen/rNyybyR](https://codepen.io/iola1999/pen/rNyybyR)


```html
<label for="toggle">
  <input type="checkbox" id="toggle"></input>
  <span></span>
</label>
```


```scss
$button-width: 500px;
$button-height: 295px;
$toggle-diameter: 255px; // 可以点击的圆圈直径
$toggle-wider: 333px; // 按下时变长一些的宽度
$button-toggle-offset: ($button-height - $toggle-diameter) / 2; // 点击区域距左边间隙
$toggle-shadow-offset: 10px; // 点击区域的阴影
$toggle-wider: 333px;
$color-grey: #e9e9e9;
$color-dark-grey: #39393d;
$color-green: #30d158;

span {
  display: inline-block;
  width: $button-width;
  height: $button-height;
  background-color: $color-grey;
  border-radius: $button-height / 2;
  position: relative;
  transition: 0.3s all ease-in-out;

  &::after {
    content: "";
    display: inline-block;
    width: $toggle-diameter;
    height: $toggle-diameter;
    background-color: #fff;
    border-radius: $toggle-diameter / 2;
    position: absolute;
    top: $button-toggle-offset;
    transform: translateX($button-toggle-offset); // 方便后面处理动画
    box-shadow: $toggle-shadow-offset 0 $button-toggle-offset * 4
      rgba(0, 0, 0, 0.1); // 横向 纵向 半径 颜色
    transition: 0.3s all ease-in-out;
  }
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

input[type="checkbox"] {
  display: none;
  &:checked {
    & + span {
      background-color: $color-green;
    }
    & + span::after {
      transform: translateX(
        $button-width - $button-toggle-offset - $toggle-diameter
      );

      box-shadow: $toggle-shadow-offset * -1 0 $button-toggle-offset * 4
        rgba(0, 0, 0, 0.1); // 横向 纵向 半径 颜色
    }
  }

  &:active {
    // 按下时拉长的效果
    & + span::after {
      width: $toggle-wider; // 这样左至右时效果对了，但是右至左不对
    }
  }
  &:checked:active {
    // 按下时拉长的效果
    & + span::after {
      transform: translateX(
        $button-width - $button-toggle-offset - $toggle-wider
      );
    }
  }
}

// 还可以处理深色模式
@media(prefers-color-scheme: dark) {
  body {
    background-color: #1C1C1E;
  }
  span {
    background-color: $color-dark-grey;
  }
}

```