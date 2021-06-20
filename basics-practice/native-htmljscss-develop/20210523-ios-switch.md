[https://www.bilibili.com/video/BV1t741127Vk](https://www.bilibili.com/video/BV1t741127Vk)

[https://codepen.io/iola1999/pen/rNyybyR](https://codepen.io/iola1999/pen/rNyybyR)


```html
<span>
  
</span>
```


```scss
$button-width: 500px;
$button-height: 295px;
$toggle-diameter: 255px;  // 可以点击的圆圈宽度
$button-toggle-offset: ($button-height - $toggle-diameter) / 2; // 点击区域距左边间隙
$toggle-shadow-offset: 10px;  // 点击区域的阴影
$toggle-wider: 333px;
$color-grey: #E9E9E9;
$color-dark-grey: #39393D;
$color-green: #30D158;

span {
  display: inline-block;
  width: $button-width;
  height: $button-height;
  background-color: $color-grey;
  border-radius: $button-height / 2;
  position: relative;
  
  &::after {
    content: '';
    display: inline-block;
    width: $toggle-diameter;
    height: $toggle-diameter;
    background-color: #fff;
    border-radius: $toggle-diameter / 2;
    position: absolute;
    top: $button-toggle-offset;
  }
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

```