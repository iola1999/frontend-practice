[https://www.bilibili.com/video/BV1uK411c7VW](https://www.bilibili.com/video/BV1uK411c7VW)

[https://play.tailwindcss.com/ygVVYS3Y5A](https://play.tailwindcss.com/ygVVYS3Y5A)

```html
<div class="container mx-auto">
  <input type="radio" name="tab" id="iPhoneA" class="hidden" checked />
  <input type="radio" name="tab" id="iPhoneB" class="hidden" />
  <input type="radio" name="tab" id="iPhoneC" class="hidden" />

  <div class="my-4 nav">
    <label for="iPhoneA">
      <span class="py-2 px-5 rounded-full inline-block">iPhoneA</span>
    </label>
    <label for="iPhoneB">
      <span class="py-2 px-5 rounded-full inline-block">iPhoneB</span>
    </label>
    <label for="iPhoneC">
      <span class="py-2 px-5 rounded-full inline-block">iPhoneC</span>
    </label>
  </div>

  <div class="p-8 rounded-xl shadow-md hidden tab-iphone-a">
    <div class="w-3/5 flex flex-col justify-center">
      <div>
        <h2 class="text-2xl font-bold">iPhone A</h2>
        <p class="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus qui id repellat
          praesentium harum quis culpa atque aliquid sequi commodi. At recusandae quibusdam, atque
          distinctio possimus dolorem reiciendis ullam vero?
        </p>
        <button
          class="text-lg bg-black rounded-full shadow py-2 px-5 text-white mt-6 transform hover:scale-110 hover:bg-blue-600 transition"
        >
          Shop Now
        </button>
      </div>
    </div>
    <div class="w-2/5">
      <img
        src="https://www.apple.com/v/iphone/home/ax/images/overview/compare/compare_iphone_11__bzjboswm5hbm_large.jpg"
        alt=""
      />
    </div>
  </div>
  <div class="p-8 rounded-xl shadow-md hidden tab-iphone-b">
    <div class="w-3/5 flex flex-col justify-center">
      <div>
        <h2 class="text-2xl font-bold">iPhone B</h2>
        <p class="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus qui id repellat
          praesentium harum quis culpa atque aliquid sequi commodi. At recusandae quibusdam, atque
          distinctio possimus dolorem reiciendis ullam vero?
        </p>
        <button
          class="text-lg bg-black rounded-full shadow py-2 px-5 text-white mt-6 transform hover:scale-110 hover:bg-blue-600 transition"
        >
          Shop Now
        </button>
      </div>
    </div>
    <div class="w-2/5">
      <img
        src="https://www.apple.com/v/iphone/home/ax/images/overview/compare/compare_iphone_se__1uyg4tzyd4ya_large.jpg"
        alt=""
      />
    </div>
  </div>
  <div class="p-8 rounded-xl shadow-md hidden tab-iphone-c">
    <div class="w-3/5 flex flex-col justify-center">
      <div>
        <h2 class="text-2xl font-bold">iPhone C</h2>
        <p class="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus qui id repellat
          praesentium harum quis culpa atque aliquid sequi commodi. At recusandae quibusdam, atque
          distinctio possimus dolorem reiciendis ullam vero?
        </p>
        <button
          class="text-lg bg-black rounded-full shadow py-2 px-5 text-white mt-6 transform hover:scale-110 hover:bg-blue-600 transition"
        >
          Shop Now
        </button>
      </div>
    </div>
    <div class="w-2/5">
      <img
        src="https://www.apple.com/v/iphone/home/ax/images/overview/compare/compare_iphone_12__btq63lk8td7m_large.jpg"
        alt=""
      />
    </div>
  </div>
</div>
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

#iPhoneA:checked ~ .tab-iphone-a {
  @apply flex;
}
#iPhoneA:checked ~ .nav label[for="iPhoneA"] span {
  @apply bg-gray-200;
}

#iPhoneB:checked ~ .tab-iphone-b {
  @apply flex;
}
#iPhoneB:checked ~ .nav label[for="iPhoneB"] span {
  @apply bg-gray-200;
}

#iPhoneC:checked ~ .tab-iphone-c {
  @apply flex;
}
#iPhoneC:checked ~ .nav label[for="iPhoneC"] span {
  @apply bg-gray-200;
}
```
