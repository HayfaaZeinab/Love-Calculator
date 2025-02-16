function calculateFlames() {
    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s+/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s+/g, '');

    if (!name1 || !name2) {
        document.getElementById('result').innerText = 'Please enter both names!';
        return;
    }

    // Remove common letters
    let combined = name1 + name2;
    for (let char of name1) {
        if (name2.includes(char)) {
            combined = combined.replace(char, '');
            combined = combined.replace(char, '');
        }
    }

    const count = combined.length;

    // FLAMES logic
    const flames = ['Friends', 'Lovers', 'Affection', 'Marriage', 'Enemies', 'Siblings'];
    let index = count % flames.length;

    const result = index === 0 ? flames[flames.length - 1] : flames[index - 1];

    // Display result
    document.getElementById('result').innerText = `Your relationship is: ${result}!`;
}
