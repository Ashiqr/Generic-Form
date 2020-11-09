function ValidateInput(functions, input){
    for (var fun in functions){
        var r = functions[fun](input);
        if (!r.result){
            return {result : false, message: r.message};
        }
    }
    return {result : true, message: ''};
}

function ValidateAllInput(functions, input){
    var result = [];
    for (var fun in functions){
        result.push(functions[fun](input));
    }
    return result;
}

function RequiredInput(input){
    if (input && input.length > -1){
        return {result : true, message: ''};
    }
    return {result : false, message: 'Input is required'};
}

function OnlyText(input){
    const regex = RegExp(/[^a-zA-Z]/g);
    if (regex.test(input)){
        return {result : false, message: 'Input must contain text only'};
    }
    return {result : true, message: ''};
}

function OnlyNumeric(input){
    const regex = RegExp(/[^0-9]/g);
    if (regex.test(input)){
        return {result : false, message: 'Input must contain numbers only'};
    }
    return {result : true, message: ''};
}

exports.ValidateInput = ValidateInput;
exports.RequiredInput = RequiredInput;
exports.OnlyText = OnlyText;
exports.OnlyNumeric = OnlyNumeric;