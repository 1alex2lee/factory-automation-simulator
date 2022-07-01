var no_c50 = 0;

function add_c50() {
    no_c50 += 1;
    document.getElementById("no_c50").innerHTML = no_c50;

    var div = document.createElement("div");
    div.innerHTML = "Upwork";

    document.body.appendChild(div);


    var btn = document.createElement("add_c50");

    btn.onclick = function() {
        btn.textContent = (+btn.innerHTML) + 1;
    };

    document.body.appendChild(btn);
}