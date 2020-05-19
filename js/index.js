$(document).ready(function() {
    $('.select2-source').select2();
    $('.select2-source__no-search').select2({
        placeholder: "Select a state",
        minimumResultsForSearch: Infinity
    });
    $('.btn-submit-checkout').click(function (event) {
        var requiredFields = $('.required:visible');
        if (validateAllFields(requiredFields) > 0) return;

        setTimeout(function () {
            $('.main-content').hide('slow');
            $('.greeting').show('slow');
        }, 300)

    });
    // validate
    $('.required').focusout(function() {
        var $field = $(this);

        if (!validateField($field.attr('name'), $field.val())) {

            $field.addClass('border-danger text-danger').tooltip({
                template: '<div class="tooltip tooltip-custom"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: 'manual'
            }).tooltip('toggle');
        } else {
            $field.removeClass('border-danger text-danger').tooltip('hide');
        }
     });


});
// validate field by one
var validateField = function(fieldName, value) {

    var isValid=true;
    switch (fieldName) {
        case 'billing-company-name':
            isValid = value.length > 2;
            break;
        case 'billing-first-name':
            isValid = value.length > 2;
            break;
        case 'billing-last-name':
            isValid = value.length > 2;
            break;
        case 'billing-email':
            isValid = (/[\w\S\-\.\_]+@([\w\S-]+\.)+[\w\S-]+/gi).test(value);
            break;
        case 'billing-address':
            isValid = value.length > 5;
            break;
        case 'billing-city':
            isValid = value.length > 3;
            break;
        case 'billing-zip':
            isValid = (/^\d+$/gi).test(value);
            break;
        case 'billing-contact-phone':
            isValid = value.length > 5;
            break;
        case 'license-name':
            isValid = value.length > 3;
            break;
        case 'license-email':
            isValid = (/[\w\S\-\.\_]+@([\w\S-]+\.)+[\w\S-]+/gi).test(value);
            break;
        case 'cc-number':
            isValid = (/^(\d{12,16})$/).test(value);
            break;
        case 'cc-cvv':
            isValid = (/^(\d{3,4})$/).test(value);
            break;
        default:
            isValid=false;
            break;
    }
    return isValid;
}

// validate all fields
var validateAllFields = function (fields) {

    var validationErorCount = 0;
    $(fields).each(function (i, field) {

        if (!validateField($(field).attr('name'), $(field).val())) {
            $(field).addClass('border-danger text-danger').tooltip({
                template: '<div class="tooltip tooltip-custom"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: 'manual'
            }).tooltip('toggle');
            validationErorCount = validationErorCount + 1;
        }
    });
    return validationErorCount;
}