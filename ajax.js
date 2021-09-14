function ajax(obj) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else{
        xhr = new Activexobject( "Microsoft.XMLHTTP");
    }
    xhr.open(obj.method, obj.url);
    if (obj.method === 'post' || obj.method === 'POST') {
        xhr.send(obj.data);
    }
    else{
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var res = JSON.parse(xhr.responseText);
            obj.success(res);
        }
    }
}