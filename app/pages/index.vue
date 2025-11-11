<template>
  <h1>Home</h1>
  <div class="container">
    <div class="item">Flex item 1</div>
    <div class="item i2">Flex item 2</div>
    <div class="item">Flex item 3</div>
    <div class="item i4">Flex item 4</div>
    <div class="item i5">Flex item 5</div>
  </div>
  <video class="video1" width="640" height="320" controls autoplay muted>
    <source src="/file_example_WEBM_640_1_4MB.webm" type="video/webm" />
    Sorry, your browser doesn't support embedded videos.
  </video>
  <p>
    Video from
    <NuxtLink to="/">Ishan Nandan</NuxtLink>
  </p>
  <img class="img1" src="/image-1.jpg" alt="Image" width="640" height="320" />
  <p>
    Image from
    <NuxtLink to="/">Ishan Nandan</NuxtLink>
  </p>
  <img class="img2" src="/icons8-mac-logo-100.png" alt="Icon" />
  <p>
    Icon from
    <NuxtLink to="/">Ishan Nandan</NuxtLink>
  </p>
</template>
