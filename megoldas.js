//Készítő
function keszito() {
    console.log("Kis Nándor\nJunior frontend\nTeam #11")
}

// Hatványozó
function hatvanyozo(szam, hatvany) {
    return (szam ** hatvany)
}

// Páros szám létrehozása
function parosLetrehoz(start, end) {
    let num = Math.round(Math.random() * (end - start)) + start;
    while (num % 2 !== 0 || num === 0) {
        num = Math.round(Math.random() * (end - start)) + start;
    }
    return num
}

//Testtömeg index
function testTomegIndex(sulyKg, magassagM) {
    let tti = sulyKg / magassagM ** 2;
    if (tti < 16) { return "sulyosSovanysag" }
    else if (tti < 17) { return "mersekeltSovanysag" }
    else if (tti < 18.5) { return "enyheSovanysag" }
    else if (tti < 25) { return "normalisTestsuly" }
    else if (tti < 30) { return "tulsulyos" }
    else if (tti < 35) { return "IfokuElhizas" }
    else if (tti < 40) { return "IIfokuElhizas" }
    else { return "IIIfokuSulyosElhizas" }
}


//Egész osztó-e?
function egeszOsztoE(szam, oszto) {
    if (szam % oszto === 0) {
        return true
    } return false
}
