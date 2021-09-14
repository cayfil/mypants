function ajax(method, url, data, success) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var res = JSON.parse(xhr.responseText);
            success(res);
        }
    }
}