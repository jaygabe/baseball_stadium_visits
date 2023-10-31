async function fetchStadiums() {
    const response = await fetch("http://api.fantasydata.net/v3/mlb/scores/xml/Stadiums");
    const stadiums = response.json();
    console.log(stadiums);
}

fetchStadiums();