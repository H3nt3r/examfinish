
export default function showInfo(cont) {
    //console.log("input content: " + cont);

    let allData = cont.split('\n');

    //step 1
    let countStr = allData.length - 1;
    console.log("Число записей: " + countStr);

    //step 2
    var arrAreas = [];

    var rowsInFile = [];
    //1 = город/область 2 = население 3 = площадь 4 = тип 5 = округ
    for(let i=1; i<countStr; i++) {
        rowsInFile[i] = allData[i].split('|');
        let str = rowsInFile[i][5].substr(0, rowsInFile[i][5].length-1);
        if(CheckElementInArray(str, arrAreas)  == false) {
            arrAreas.push(str);
        }
    }
    arrAreas.sort();
    let areas = "Список округов: ";
    for(let i=0; i<arrAreas.length; i++){
        areas = areas + arrAreas[i];
        if(i != (arrAreas.length -1) ) {
            areas += ", ";
        }
    }
    console.log(areas);

    //step 3
    let maxSq = 0;
    for(let i=1; i<countStr; i++) {
        rowsInFile[i] = allData[i].split('|');
        let cur = rowsInFile[i][3].split(' ').join('');
        if(parseInt(cur) > maxSq) {
            maxSq = parseInt(cur);
        }
    }
    console.log("Наибольшая площадь: " + maxSq + " кв.км.");

    //step 4
    maxSq = 0;
    let ind = 0;
    for(let i=1; i<countStr; i++) {
        rowsInFile[i] = allData[i].split('|');
        let cur = rowsInFile[i][2].split(' ').join('');
        if((parseInt(cur) > maxSq) && (rowsInFile[i][4] === " Республика ")) {
            maxSq = parseInt(cur);
            ind = i;
        }
    }
    console.log("Республика с наибольшим количеством населения: " + rowsInFile[ind][1]);

    //step 5
    let sr = 0;
    ind = 0;
    for(let i=1; i<countStr; i++) {
        rowsInFile[i] = allData[i].split('|');
        let soc = parseInt(rowsInFile[i][2].split(' ').join(''));
        let sc = parseInt(rowsInFile[i][3].split(' ').join(''));
        if((soc / sc) < parseFloat(sr) || (sr === 0)) {
            sr = soc / sc;
            ind = i;
        }
    }
    console.log("Наименьшая плотность населения:" + rowsInFile[ind][1]);
}


function CheckElementInArray(str, arr) {
    for(let i=0; i<arr.length; i++) {
      if(str == arr[i]) {
        return true;
      }
    }
    return false;
}
  
