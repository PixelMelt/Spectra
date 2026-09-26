# Spectra
### A better Discord Theme
![Version](https://img.shields.io/badge/Version-2.0-fdd651.svg)
[![GitHub issues](https://img.shields.io/github/issues/PixelMelt/Spectra.svg)](https://GitHub.com/PixelMelt/Spectra/issues/)
[![File Size](https://badge-size.herokuapp.com/PixelMelt/spectra/master/spectrafull.css)](https://github.com/PixelMelt/Spectra/blob/main/spectrafull.css)
[![Download](https://img.shields.io/badge/Download-gray?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMBAMAAABc7lwNAAAAHlBMVEX///8AAAAqKir9/f3V1dUMDAzExMR/f3/u7u5HcEzsmKQTAAAACnRSTlP/EkT9uCi0gOkAQx5NsAAAAgNJREFUaN7t2D1qw0AQhuEF5QIbUMKWBhu1LoIO4JxAOYKPEAikTJELbKnbRpHt7N/MfEMUSDOul3cfbFnakZv/5OMsYxnLWMYylrGMZf4vE4RMDNqK94HNxH5SdmL/OrEZP5wnJWb4PAQmE+/fx4OKs6x0p4nJ+OGj03GWle4u39GVWzgVZ11ZcFy5hVNx1pUFx1VbaDjXlTkny6xbaDgXTMFx6Uq4bIE5N0zOSZrHyxaYc8MsnDYTH45OxUkYKjP3z07FSRh3ar+b2e9VnByzC9QPruLkGE9efhoOjSn/DAoOjSn/mpjDYKobBeQwmOq2hTgcprqJIg6HqW7pgMNi6ieDzGEx9XNK5PCYOiNyeEzz1BQ4AqbJCBwB0z7DWY6EaTMsR8IQJwqGI2KIDMMRMdT5huTIGCpDcmQMedoiOABDZggOwNBnv5bzImPoTMPpAYY5idYchGEyFQdiuHNxwYkQw2UKTsJ0DIY9peechHliMGwm52AMPzNkHIzhMxnnCDHCBJM4R4gRMomDMdI8lTgQI2UqTnf2v5vuSs4oYMRMwREx8qyZc0SMnMk4MgZMvtmlLGJA5ofTncOWOfzGGXebxvkrZ8Fs0lw5CAMzKwdi8DuKbw7E4MzCwRjFGxO/H/FMrXjx0r9BjCYTor3bsoxlLGMZy1jGMpaxjGUss+3zBdmzZQd2ikHhAAAAAElFTkSuQmCC)](https://PixelMelt.github.io/Spectra/assets/download.html)
---
## Installation Instructions ##
1. Download [`spectra.theme.css`](https://github.com/PixelMelt/Spectra/blob/main/spectra.theme.css) (or grab it from https://betterdiscord.app/theme/Spectra)
2. Place it in your BetterDiscord `themes` folder
3. Enable the theme in your settings

The file you download is a small loader: the theme itself is fetched from this repo, so you get fixes automatically without reinstalling.

Upgrading from 1.x? Old installs keep working and now load 2.0, but grab the new file to get the customization options.

## Customizing ##
Open `spectra.theme.css` and uncomment any of the `--spectra-*` variables at the bottom. Every other color is derived from these, so changing the accent or a background recolors everything that uses it. You can also comment out any of the optional addons there.

## Development ##
The theme is written in SCSS under `scss/` and compiled to `dist/`:

```sh
npm install
npm run build   # compile scss/ -> dist/
npm run watch   # recompile on change
```

- `scss/_palette.scss` holds every color. `scss/_tokens.scss` maps them onto Discord's CSS variables, which is how most of the theme works.
- `scss/components/` holds the few rules that need Discord class names.
- Pushing to `main` runs the **Build** workflow, which compiles and commits `dist/` and publishes it to GitHub Pages. Every install picks it up the next time Discord reloads.
- The **Update class names** workflow checks Discord's class names daily and opens a PR when any used here change.
- `legacy/` has the 1.x source for reference. The old file URLs are now small shims that load 2.0.

---
![Preview](/assets/Template.png)
