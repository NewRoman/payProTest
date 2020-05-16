$(document).ready(function() {
    $('.select2-source').select2();
    $('.select2-source__no-search').select2({
        placeholder: "Select a state",
        minimumResultsForSearch: Infinity
    });
    $('.btn-submit-checkout').click(function (event) {

        setTimeout(function () {
            $('.main-content').hide('slow');
            $('.greeting').show('slow');
        }, 300)

    })
});