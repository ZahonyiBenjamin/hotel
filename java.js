datum_min()

function datum_min()
{
    var dtToday = new Date();
 
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
     day = '0' + day.toString();
    var minDate = year + '-' + month + '-' + day;

    document.getElementById("datum").innerHTML = `
    <label for="kezdo" class="mt-3">Vendégéjszakák kezdő időpontja:</label>
    <input type="date" name="kezdo" id="kezdo" min="${minDate}">
    `
}

function Kereses(keresett)
{
    keresett = keresett
    window.find(keresett);
}

function music_toggle()
{
    var zene = document.getElementById("zene_fajl");
    if (zene.paused)
    {
        zene.play()
        localStorage.setItem("bgMusicState", "playing")
    }
    else
    {
        zene.pause()
        localStorage.setItem("bgMusicState", "paused")
    }
}