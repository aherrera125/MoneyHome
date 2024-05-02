/*!
=========================================================
* Ollie Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

function execute() {
    var tax = document.getElementById('idTax').value;
    let Insurance = document.getElementById('idInsurance').value;
    let Gross = document.getElementById('idGross').value;
    let Percentaje = document.getElementById('idPercentaje').value;
    let Market = document.getElementById('idMarket').value;
    let Rent = document.getElementById('idRent').value;
    let Bills = document.getElementById('idBills').value;
    let Other = document.getElementById('idOther').value;    

    if (Gross != "" && Percentaje != "" && Market != "" && Rent != "" && Bills != "") {
        //if (Number.isInteger(Amount) && Number.isInteger(Percentaje) && Number.isInteger(Market) && Number.isInteger(Rent) && Number.isInteger(Bills)) {
        let Amount = (Gross / 12);
        let AmountTax = Amount - (Amount * tax / 100);
        let Saving = AmountTax * Percentaje / 100;
        let Rest = AmountTax - Saving - Market - Rent - Bills - Other;
        document.getElementById('idAmount').value = AmountTax;
        document.getElementById('idSaving').value = Saving;
        document.getElementById('idRest').value = Rest;
        document.getElementById('idWeek').value = Rest / 4;
        /*} else {
            alert("Insert numbers!");
        }*/
    } else {
        alert("complete the fields!");
    }
}

$(document).ready(function () {
    $("#idExecute").on('click', function (event) {

        alert("Mensaje");
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin: 30,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: false,
            loop: false
        }
    }
});

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    nav: true,
    dots: false
})