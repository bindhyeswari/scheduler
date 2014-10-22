// This script contains semi-test code
// test code
var obj = extractJsonFromForm(document.forms.candidate);
console.log(obj);

// test code
sendCandidateData({
    name: 'Edwin Villanueva',
    phone: '408.222.3265',
    notes: 'UI Developer'
}, function (results) {
    var res = JSON.parse(results);
    console.log(res.message === 'Thanks for the info!' ? 'AJAX test passed' : 'Ajax test failed');
});

// test code for createCandidateTr
var tr = createCandidateTr({
    name: 'Edwin Villanueva',
    notes: 'UI Developer',
    phone: '408.222.3265'
}, ['name', 'phone', 'notes']);

console.log(tr);

// test code for write candidate
writeCandidateToTable(document.getElementById('candidates_info'), {
    name: 'Edwin Villanueva',
    notes: 'UI Developer',
    phone: '408.222.3265'
}, ['name', 'phone', 'notes']);