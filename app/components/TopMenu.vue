<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top top-menu">
  <div class="container">
    <a class="navbar-brand text-white" href="#"><b>AnonViewer</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link text-light" aria-current="page" href="#">О сервисе</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Обратная связь</a>
        </li>
      </ul>
      <form class="d-flex">
        
        <button class="btn btn-primary" type="submit"><i class="bi bi-hearts"></i> Избранные</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style>
.top-menu {
    background: rgba(0,0,0,0.1);
    backdrop-filter: blur(2px);
    padding: 15px 0;
}

.bi-heart {
    position: relative;
    top: 1px;
}

.btn-primary {
    font-size: 15px;
    border-radius: 6px;
    padding: 6px 20px;
}
</style>