<template>
  <div>
      <ul id="styleChanger">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
            id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <span><i class="fas fa-sun"></i></span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end styleNav" aria-labelledby="navbarDropdownMenuLink">
            <p>Change the background color</p>
            <li>
              <span class="btnBlack" style="background-color: black" id="colorBlack"></span>
            </li>
            <li>
              <span class="btnBlue" style="background-color: blue" id="colorBlue"></span>
            </li>
            <li>
              <span class="btnRed" style="background-color: red" id="colorRed"></span>
            </li>
            <li>
              <span class="btnGreen" style="background-color: green" id="colorGreen"></span>
            </li>
            <li>
              <span class="btnYellow" style="background-color: yellow; color: black" id="colorYellow"></span>
            </li>
            <li>
              <span class="btnPink" style="background-color: pink" id="colorPink"></span>
            </li>
          </ul>
        </li>
      </ul>
  </div>
</template>

<script>

export default {

  mounted() {
    let colorBlack = document.querySelector('#colorBlack');

colorBlack.addEventListener('click', function () {
  document.body.classList.toggle('dark_mode');
  if (document.body.classList.contains('dark_mode')) {
    localStorage.setItem('website_theme', 'dark_mode');
  } else {
    localStorage.setItem('website_theme', 'default');
  }
});

/////// Blue Background

let colorBlue = document.querySelector('#colorBlue');

colorBlue.addEventListener('click', function () {
  document.body.classList.toggle('blue_mode');
  if (document.body.classList.contains('blue_mode')) {
    localStorage.setItem('website_theme', 'blue_mode');
  } else {
    localStorage.setItem('website_theme', 'default');
  }
});

/////// Red Background

let colorRed = document.querySelector('#colorRed');

colorRed.addEventListener('click', function () {
  document.body.classList.toggle('red_mode');
  if (document.body.classList.contains('red_mode')) {
    localStorage.setItem('website_theme', 'red_mode');
  } else {
    localStorage.setItem('website_theme', 'default');
  }
});

/////// Green Background

let colorGreen = document.querySelector('#colorGreen');

colorGreen.addEventListener('click', function () {
  document.body.classList.toggle('green_mode');
  if (document.body.classList.contains('green_mode')) {
    localStorage.setItem('website_theme', 'green_mode');
  } else {
    localStorage.setItem('website_theme', 'default');
  }
});

/////// Yellow Background

let colorYellow = document.querySelector('#colorYellow');

colorYellow.addEventListener('click', function () {
  document.body.classList.toggle('yellow_mode');
  if (document.body.classList.contains('yellow_mode')) {
    localStorage.setItem('website_theme', 'yellow_mode');
  } else {
    localStorage.setItem('website_theme', 'default');
  }
});

/////// Pink Background

let colorPink = document.querySelector('#colorPink');

colorPink.addEventListener('click', function () {
  document.body.classList.toggle('pink_mode');
  if (document.body.classList.contains('pink_mode')) {
    localStorage.setItem('website_theme', 'pink_mode');
  } else {
    localStorage.setItem('website_theme', 'default');
  }
});

function retrieve_theme() {
  var theme = localStorage.getItem('website_theme');
  if (theme != null) {
    document.body.classList.remove('default', 'dark_mode');
    document.body.classList.remove('default', 'blue_mode');
    document.body.classList.remove('default', 'red_mode');
    document.body.classList.remove('default', 'green_mode');
    document.body.classList.remove('default', 'yellow_mode');
    document.body.classList.remove('default', 'pink_mode');
    document.body.classList.add(theme);
  }
}

retrieve_theme();

window.addEventListener("storage", function () {
  retrieve_theme();
}, false);

  }
}
</script>

<style>
  .styleNav span {
    border-radius: 155px;
    padding: 15px;
  }

  .styleNav li {
    padding: 15px;
  }

  .styleNav p {
    width: 100%;
    text-align: center;
  }

</style>
