// 1. Fetching data from the API
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {

        // 2. Get all the countries from Asia continent/region using Filter method
        const asianCountries = data.filter(country => country.region === 'Asia');
        console.log('Asian Countries:', asianCountries.map(country => country.name.common));



        // 3. Get all the countries with a population of less than 2 lakhs (200,000) using Filter method
        const lowPopulationCountries = data.filter(country => country.population < 200000);
        console.log('Countries with population less than 2 lakhs:');
        lowPopulationCountries.forEach(country => {
            console.log(`${country.name.common} (Population: ${country.population})`);
        });



        // 4. Print the following details: name, capital, flag, using forEach method
        console.log('Country Details:');
        data.forEach(country => {
            const flagEmoji = country.flag;
            console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${flagEmoji}`);
        });



        // 5. Print the total population of countries using reduce method
        const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
        console.log(`Total Population: ${totalPopulation}`);



        // 6. Print the country that uses US dollars as currency

        const countriesUsingUSD = data.filter(country => {
            const currencies = Object.values(country.currencies || {});
            return currencies.some(currency => currency.name.toLowerCase().includes('united states dollar'));
        });

        if (countriesUsingUSD.length > 0) {
            console.log('Countries using US dollars:');
            countriesUsingUSD.forEach(country => {
                console.log(`- ${country.name.common}`);
            });
        } else {
            console.log('No country found using US dollars');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });