let evek = prompt("Írd be az életkorod!")
while (evek < 0 || evek > 120) {
    evek = prompt("Hibás életkor, írd be az életkorod!")
}
if (evek < 7) {
    document.write("Kisgyermekkor")
} else if (evek < 12) {
    document.write("Gyermekkor")
} else if (evek < 16) {
    document.write("Serdülőkor")
} else if (evek < 20) {
    document.write("Ifjúkor")
} else if (evek < 30) {
    document.write("Fiatal felnőtt kor")
} else if (evek < 60) {
    document.write("Felnőttkor")
} else { document.write("Aggkor") }
