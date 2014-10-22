// This script contains source code

// function to extract the form data and create a json object from it
function extractJsonFromForm (form) {
    return {
        name: form.name.value,
        phone: form.phone.value,
        notes: form.notes.value
    };
}

function sendCandidateData(data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener('readystatechange', function () {
        if ( xhr.readyState === 4 ) {
            if ( xhr.status === 200 )
                success(xhr.responseText);
            else
                error(xhr);
        }
    });
    xhr.send(JSON.stringify(data));
}

// function to write data into a table
function writeCandidateToTable(tbody, data, schema) {
    if ( tbody.children.length ) {
        tbody.insertBefore(createCandidateTr(data, schema), tbody.children[0]);
    } else {
        tbody.appendChild(createCandidateTr(data, schema));
    }
}

function createCandidateTr(data, schema) {
    var tr = document.createElement('tr');
    schema.forEach(function (key) {
        var td = document.createElement('td');
        td.innerHTML = data[key];
        tr.appendChild(td);
    });
    return tr;
}