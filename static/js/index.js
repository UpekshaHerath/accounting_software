let useful_life;

function LSB() {
    let cost = document.forms['SLB_form'].cost.value;
    let scrp_value = document.forms['SLB_form'].scrp_value.value;
    let useful_life = document.forms['SLB_form'].useful_life.value;

    let dipreciation_value = SLB_calculate(cost, scrp_value, useful_life);

    document.getElementById('answer').textContent = "Depreciation Value ( LKR ) : " + dipreciation_value;

    document.forms['SLB_form'].cost.value = "";
    document.forms['SLB_form'].scrp_value.value = "";
    document.forms['SLB_form'].useful_life.value = "";
    
    return false;
}

function dropdown_select() {
    let select_value = document.getElementById('floatingSelect').value;
    switch(select_value) {
        case '1' : 
            reset_form();
            document.getElementById('SLB').style.display = "block";
            document.getElementById('PUB').style.display = "none";
            break;
        case '2' : 
            reset_form();
            document.getElementById('SLB').style.display = "block";
            document.getElementById('PUB').style.display = "none";
            break;
        case '3' : 
            reset_form_PUB();
            document.getElementById('answer_PUB').textContent = "Answer";
            document.getElementById('PUB').style.display = "block";
            document.getElementById('SLB').style.display = "none";
            break;
        default : 
            console.log('Default value');
    }
}

function PUB() {
    let total_PUB = 0;
    let total_units = 0;
    let production_from_yeartoyear = new Array();

    for (let i = 1; i <= useful_life; i++) {
        let id_value = 'year-'+i; 
        let production_per_year = document.getElementById(id_value).value;
        production_from_yeartoyear.push(parseInt(production_per_year));
        total_units += parseInt(production_per_year);
    }
    
    let cost = document.forms['PUB_form'].cost.value;
    let scrp_value_PUB = document.forms['PUB_form'].scrp_value.value;
    for (let i = 0; i < useful_life; i++) {
        total_PUB += PUB_peryear_calculate(parseInt(cost), parseInt(scrp_value_PUB), total_units, production_from_yeartoyear[i]);
    }
    document.getElementById('answer_PUB').textContent = "Depreciation Value ( LKR ) : " + total_PUB;
    reset_form_PUB();
    return false;
}

//This function will generate input boxes according to the number of years
function input_production_per_year() {
    useful_life = document.forms['PUB_form'].useful_life.value;

    for (let i = useful_life; i > 0; i--) {
        let input_card = document.createElement('div');
        input_card.classList.add('mb-3');
        input_card.setAttribute('id', 'PUB_y_'+i);

        let input_label = document.createElement('label');
        input_label.classList.add('form-label');
        input_label.classList.add('bolder');
        input_label.setAttribute('for', 'year-'+i);
        input_label.textContent = 'Production For Year-' + i;
        input_card.append(input_label);

        let input_field = document.createElement('input');
        input_field.classList.add('form-control');
        input_field.setAttribute('type', 'text');
        input_field.setAttribute('id', 'year-'+i);
        input_field.setAttribute('name', 'year-'+i);
        input_field.setAttribute('placeholder', 'Production For Year-'+i);
        input_card.append(input_field);

        let form_PUB = document.getElementById('PUB_useful_life');
        insertAfter(form_PUB, input_card);
    }
}

//reset the form values in input fields 
function reset_form() {
    document.forms['SLB_form'].cost.value = "";
    document.forms['SLB_form'].scrp_value.value = "";
    document.forms['SLB_form'].useful_life.value = "";
    document.getElementById('answer').textContent = "Answer";
}

function reset_form_PUB() {
    document.forms['PUB_form'].cost.value = "";
    document.forms['PUB_form'].scrp_value.value = "";
    document.forms['PUB_form'].useful_life.value = "";

    let following_elements = document.getElementById('following_elements');
    for (let i = 1; i <= useful_life; i++) {
        let need_to_remove = document.getElementById('PUB_y_'+i);
        following_elements.removeChild(need_to_remove);
    }
}

function SLB_calculate(cost, scrp_value, useful_life) {
    let depreciation_value;
    depreciation_value = (cost - scrp_value) / useful_life;
    return depreciation_value * useful_life;
}

function PUB_peryear_calculate(cost, scrp_value, units, production_per_year) {
    let PUB_for_year = ( ( cost - scrp_value ) / units ) * production_per_year;
    return PUB_for_year;
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}