const puppeteer = require("puppeteer");
let URL = "https://careers.google.com/jobs/results/?distance=50&q=react";

const fs = require("fs/promises");

async function start() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);

    await page.waitForTimeout(500);

    const names = await page.evaluate(() => {
        return Array.from(
            document.querySelectorAll(
                "#search-results > li > a > div > div.gc-card__header > h2"
            )
        ).map((x) => {
            return x.textContent.trim();
        });
    });

    const companies = await page.evaluate(() => {
        return Array.from(
            document.querySelectorAll(
                "#search-results > li > a > div > div.gc-card__header > div > ul > li.gc-job-tags__team > span"
            )
        ).map((x) => {
            return x.textContent.trim();
        });
    });

    const locations = await page.evaluate(() => {
        return Array.from(
            document.querySelectorAll(
                "#search-results > li > a > div > div.gc-card__header > div > ul > li.gc-job-tags__location > div > span"
            )
        ).map((x) => {
            return x.textContent.trim();
        });
    });

    let all = [];

    for (let i = 0; i < names.length; i++) {
        let obj = {
            jobTitle: names[i],
            company: companies[i],
            location: locations[i],
        };
        all.push(obj);
    }

    // await fs.writeFile("names.txt", names.join("\r\n"));
    // await fs.writeFile("companies.txt", companies.join("\r\n"));
    // await fs.writeFile("locations.txt", locations.join("\r\n"));
    await fs.writeFile("AllDetails.json", JSON.stringify(all));

    await browser.close();
}

start();
