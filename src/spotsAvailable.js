export default function spotsAvailable() {
    let spots = new Set();

    for(let i = 1; i < 101; i++) {
        spots.add(i);
    }

    return spots;
}