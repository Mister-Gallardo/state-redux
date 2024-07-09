export function test() {
    function* generationFunc() {
        for (let i = 0; i < 4; i++) {
            yield i;
        }
    }
    const iter = generationFunc();

    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
}