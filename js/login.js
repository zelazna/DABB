if (typeof(Storage) !== "undefined") {
    var $form = $("form");
    var value;
    var ls = {};
    $form.on("submit", function (e) {
        value = $("input[type=text]").val();
        ls.user = value;
        ls.score = 0;
        ls = JSON.stringify(ls);
        localStorage.clear();
        localStorage.setItem("data", ls);
    });
} else {
    alert("localStorage non supporté");
}

