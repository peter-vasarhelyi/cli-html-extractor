"use strict";

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const cheerio = require("cheerio");
const fs = require("fs");

const args = yargs(hideBin(process.argv))
  .option("format", {
    choices: ["html", "text"],
    default: "html",
  })
  .option("selector", {
    description: "jQuery selector",
    type: "string",
  })
  .demandOption("selector")
  .parse();

const data = fs.readFileSync(0, "utf-8");

const element = cheerio.load(data)(args.selector);
const result = element[args.format]();
console.log(result);
