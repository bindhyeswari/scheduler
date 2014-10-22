document.getElementById('btn_save_candidate').addEventListener('click' ,function () {
    // access the candidate information
    var candidate = extractJsonFromForm(document.forms.candidate);
    sendCandidateData(candidate, function () {
        writeCandidateToTable(document.getElementById('candidates_info'), candidate, ['name', 'phone', 'notes']);
        document.forms.candidate.reset();
    });
});