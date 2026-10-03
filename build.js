import { readFileSync, watch, writeFileSync } from "fs";
import * as sass from "sass";

function build() {
    const { css } = sass.compile("scss/spectra.scss", { style: "expanded" });
    writeFileSync("dist/spectra.css", `${readFileSync("header.txt", "utf8")}\n${css}\n`);
}

if (process.argv.includes("--watch")) {
    const rebuild = () => {
        try {
            build();
            console.log("built dist/spectra.css");
        } catch (error) {
            console.error(error.message);
        }
    };
    rebuild();
    watch("scss", { recursive: true }, rebuild);
    watch("header.txt", rebuild);
} else {
    build();
}
