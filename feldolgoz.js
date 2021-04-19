
$(function () {
    $('#add').on("click", adatBeszur); //referencia a metodusra
    $('#betolt').on("click", beolvas); //referencia a metodusra
    $("section").delegate(".kuka" ,"click", torles);
    $("section").delegate(".ok" ,"click", athuz);
});


var teendoim = [];

function beolvas() {
    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function (result) {
            teendoim = JSON.parse(result);
            //console.log(teendoim);
            tablazatbaKiir();
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
    if (lista.todo !== "" && lista.datum !== "") {
        console.log(lista);
        $.ajax({
            type: "POST",
            url: "beir.php",
            data: lista,
            success: function () {
                teendoim.push(lista);
                kiir();
            },
            error: function () {
                alert("Hiba az adatok mentesekor!");
            }
        });
    }else{
        $("section").html("Nincs megadva adat!");
    }
}

function kiir() {
    $("section").empty();
    var txt = "<ul>";
    for (var i = 0; i < teendoim.length; i++) {
        txt += "<li>" + teendoim[i].todo + " " + teendoim[i].datum + "</li>";
    }
    txt += "</ul>";
    $("section").html(txt);

    tablazatbaKiir();
}

function tablazatbaKiir() {
    $("section").empty();
    var txt = "<table>";
    
    for (var i = 0; i < teendoim.length; i++) {
        console.log(teendoim[i].allapot);
        if(teendoim[i].allapot === "1"){
            txt += "<tr class='athuz'><td>" + teendoim[i].todo + "</td>";
        
        }else{
            txt += "<tr><td>" + teendoim[i].todo + "</td>";       
        }
        txt += "<td>" + teendoim[i].datum + "</td>";
        txt += "<td><img class='kuka' data-id='"+ teendoim[i].ID +"' src='kepek/kuka.jpg'></td>";
        txt += "<td><img class='ok' data-id='"+ teendoim[i].ID +"' src='kepek/ok.png'></td></tr>";
    }
    txt += "</table>";

    $("section").html(txt);
}

function torles(){
    console.log(teendoim);
    var id = $(this).attr("data-id");
    console.log("id: " + id);
    $.ajax({
        type: "DELETE",
        url: "torles.php?id=" + id,
        success: function () {
            beolvas();
        },
        error: function () {
            alert("Hiba az adatok torlesekor!");
        }
    });
}

function athuz(){
    var id = $(this).attr("data-id");
    $(this).closest("tr").addClass("athuz");
    $.ajax({
        type: "PUT",
        url: "modositas.php?id=" + id,
        success: function () {
            beolvas();
        },
        error: function () {
            alert("Hiba az adatok modositasakor!");
        }
    });
}
