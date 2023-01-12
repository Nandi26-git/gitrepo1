function parosSzam(start, end) {
    let szam = Math.round(Math.random() * (end - start)) + start;
    while (szam % 2 !== 0 || szam === 0) {
        szam = Math.round(Math.random() * (end - start)) + start;
    }
    return szam
}