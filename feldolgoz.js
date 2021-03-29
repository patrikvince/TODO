
$(function () {
    $('#add').on("click", adatBeszur); //referencia a metodusra
    $('#betolt').on("click", beolvas); //referencia a metodusra
    //$("article").delegate("ul li" ,"click", rendezes);
});


var teendoim = [];

function beolvas() {
    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function (result) {
            teendoim = JSON.parse(result);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betoltesekor!");
        }
    });
}

function adatBeszur() {
    //console.log("Hello vilag!");
    var lista = {
        todo: $("#todo").val(),
        datum: $("#datum").val()
    };
    console.log(lista);
    $.ajax({
        type: "POST",
        url: "beir.php",
        data: lista,
        success: function (ujLista) {
            teendoim.push(JSON.parse(ujLista));
            console.log(teendoim);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok mentesekor!");
        }
    });

}

function kiir() {
    $("article").empty();
    var txt = "<ul>";
    for (var i = 0; i < teendoim.length; i++) {
        txt += "<li>" + teendoim[i].todo + teendoim[i].datum +"</li>";
    }
    txt += "</ul>";
    $("article").html(txt);

    tablazatbaKiir();
}

