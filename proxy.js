const fetch = require('node-fetch');

export default async function handler(req, res) {
    const query = req.query.query;
    const apiUrl = `https://script.google.com/macros/s/AKfycbzbTOxTLV-UZYY_Rv11Irl-c5Wmqp6TyTa-xPOcIKTodwm_BC4BUArU4I2TamwulDr8/exec?query=${query}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        res.status(200).json(data); // Return the response from Google Apps Script
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
