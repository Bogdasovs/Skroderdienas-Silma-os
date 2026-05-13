# Skroderdienas Silmačos un Kapitāls

Šī ir vienkārša daudzlapu statiska mājaslapa skolas darbam latviešu valodā.

## Kā atvērt Visual Studio Code

1. Atver Visual Studio Code.
2. Izvēlies `File` -> `Open Folder`.
3. Atver šo mapi:
   `C:\Users\user\Documents\Codex\2026-05-12\files-mentioned-by-the-user-hqdefault`
4. Atver failu `index.html`.

## Kā palaist lapu

Vieglākais variants:

1. VS Code instalē paplašinājumu `Live Server`.
2. Ar labo peles pogu nospied uz `index.html`.
3. Izvēlies `Open with Live Server`.

Var arī vienkārši divreiz nospiest uz `index.html`, un lapa atvērsies pārlūkā.

Alternatīva bez Live Server:

1. VS Code atver termināli.
2. Ieraksti `node server.js`.
3. Pārlūkā atver `http://127.0.0.1:8000/`.
4. Citā ierīcē tajā pašā Wi-Fi tīklā atver adresi, ko terminālis parāda pēc teksta `Open on another device in the same Wi-Fi`.

## Faili

- `index.html` - sākuma lapa.
- `skroderdienas.html` - informācija par “Skroderdienām Silmačos”.
- `kapitals.html` - informācija par “Kapitālu”.
- `autori.html` - informācija par Rūdolfu Blaumani un Kārli Marksu.
- `viedoklis.html` - mūsu viedoklis un darbu salīdzinājums.
- `styles.css` - lapas izskats.
- `script.js` - izvēlnes darbība un klikšķis uz “Kapitāls” izdošanas datuma.
- `assets/hqdefault.jpg` - pievienotā fotogrāfija, kas parādās pēc klikšķa.
- `server.js` - vienkāršs lokālais serveris, ja neizmanto Live Server.
