const form = document.querySelector('form');
const input = document.getElementById('searchInput');
const button = document.getElementById('btn');
const output = document.getElementById('output');
const sorahName = document.getElementById('sorah-name');

async function getSorah(surahNumber) {
    try {
        // const url = `https://api.alquran.cloud/v1/surah/${surahNumber}`;
        const url2 = `http://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`
        const response = await fetch(url2);
        const result = await response.json();
        // console.log(result);

        if (response.ok) {
            const name = result.data.name;
            sorahName.innerHTML = name;
            
            const surahText = result.data.ayahs.map(ayah => ayah.text).join('\n');
            output.innerText = surahText;
        } else {
            throw new Error(result.code);
        }
    } catch (error) {
        console.log('Error:', error.message);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const surahNumber = input.value;
    getSorah(surahNumber);
});
