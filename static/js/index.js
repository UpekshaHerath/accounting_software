function LSB () {
    console.log('Working');
    let cost = document.forms['SLB_form'].cost.value;
    let scrp_value = document.forms['SLB_form'].scrp_value.value;
    let useful_life = document.forms['SLB_form'].useful_life.value;

    let dipreciation_value = SLB_calculate (cost, scrp_value, useful_life);
    console.log(dipreciation_value);
    console.log(cost);
    return true;
}

function SLB_calculate (cost, scrp_value, useful_life) {
    let depreciation_value;
    depreciation_value = (cost - scrp_value) / useful_life;
    return depreciation_value * useful_life;
}

function dropdown_select () {
    let select_value = document.getElementById('floatingSelect').value;
    // switch(select_value)
    console.log(select_value);
    switch(select_value) {
        case '1' : 
            console.log('One');
            document.getElementById('SLB').style.display = "block";
            document.getElementById('PUB').style.display = "none";
            break;
        case '2' : 
            console.log('Two');
            document.getElementById('PUB').style.display = "block";
            document.getElementById('SLB').style.display = "none";
            break;
        case '3' : 
            console.log('Three');
            document.getElementById('PUB').style.display = "block";
            document.getElementById('SLB').style.display = "none";
            break;
        default : 
            console.log('Default value');
    }
}

function PUB () {

}

function PUB_calculate (cost, scrp_value, ) {

}

//This function will generate input boxes according to the number of years
function input_production_per_year ()