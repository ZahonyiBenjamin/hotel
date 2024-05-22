document.getElementById("menu").innerHTML = `
<div class="container-fluid">
  <a class="navbar-brand" href="index.html" id="logo">Álomfátyol Fogadó</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav me-auto">     
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Menüpontok</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="foglalas.html">Szobafoglalás</a></li>
              <li><a class="dropdown-item" href="szolgaltatas.html">Szolgáltatások</a></li>
              <li><a class="dropdown-item" href="galeria.html">Galéria</a></li>
            </ul>
          </li>
      </ul>
    <form class="d-flex">
        <input class="form-control me-2" id="kereses" type="text" placeholder="Keresés...">
        <button class="btn btn-secondary" id="kereses_gomb" onclick="Kereses(document.getElementById('kereses').value)" type="button">Keresés</button>
      </form>
  </div>
</div>`

document.getElementById("lablec").innerHTML = `
<p>© 2024 Álomfátyol Fogadó. Minden jog fenntartva.</p>
<span>E-mail: alomfatyol@fogado.hu</span>
<br>
<span>Telefon: +36 20 123 4567</span>`


document.getElementById("zene_doboz").innerHTML = `
<audio loop id="zene_fajl">
<source src="music.mp3" type="audio/mp3">
</audio>

<button id="zene" class="gomb" onclick="music_toggle()">Zene</button>`
