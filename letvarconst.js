



function adressMaker(adress) {
    const { city, state } = adress;
    const newAdress = {
        city,
        state,
        country: "USA"
    };
    console.log(`${city} ${state}`);

}
adressMaker({ city: "austin", state: "texas" })