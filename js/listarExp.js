 function getExperiencias() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj6 = JSON.parse(this.responseText);

            /* myObj.forEach(function (o, index) {*/
            var div = document.createElement('div');

            div.className = "col-md-4";
            div.innerHTML = "<div class='column'><div class='post-module'> <div class='thumbnail'> <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg' class='img-responsive''></div><div class='post-content'> <div class='category'>" + myObj6.localidade + "</div> <h1 class='title' >" +myObj6.localidade + "</h1> <h2 class='sub_title'>Por: " + myObj6.localidade +"</h2><p class='description'>" +  myObj6.localidade + "</p><div class='post-meta'><span class='timestamp'><span class='  glyphicon glyphicon-dashboard'></span><span>  6 mins ago</span></div></div></div></div>";

            document.getElementById("lista").appendChild(div);
            /*});*/
        }
    };
    var url = "https://viacep.com.br/ws/01001000/json/";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
} 
                