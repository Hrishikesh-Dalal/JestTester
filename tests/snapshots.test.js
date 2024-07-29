const data = [
    {"id" : 1, "name" : "John Doe", "age" : 25},
    {"id" : 2, "name" : "Jane Doe", "age" : 24},
    {"id" : 3, "name" : "Joker", "age" : 35},           
    {"id" : 4, "name" : "Batman", "age" : 35},
    {"id" : 5, "name" : "Superman", "age" : 40},
];

function toFilter(key, value){
    return data.filter((d) => d[key] === value);
}

describe('Snapshot Testing', () => {
    test('Snapshot testing - id -> 1', () => {
        expect(toFilter('id', 1)).toMatchSnapshot();
    });

    test('Snapshot testing - age -> 30', () => {
        expect(toFilter('age', 30)).toMatchSnapshot();
    })
});