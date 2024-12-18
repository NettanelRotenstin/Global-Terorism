export const calcCasualties = (numOfKill: number | undefined, numOfWound: number | undefined):number => {
    if (typeof (numOfKill) != typeof (1)) {
        numOfKill = 0.0
    }
    if (typeof (numOfWound) != typeof (1)) {
        numOfWound = 0.0
    }
    return numOfKill! + numOfWound!
}

 