interface LabelLetValue {
    label: string;
}
function printLabel(labelletObj: LabelLetValue) {
    console.log(labelletObj.label);
}
let myObj = {
    size: 10,label: "size 10 object"
};
printLabel(myObj);
