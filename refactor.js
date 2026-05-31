const fs = require('fs');
const path = require('path');

const pageFile = path.join(__dirname, 'src/app/page.tsx');
let content = fs.readFileSync(pageFile, 'utf8');

// 1. Add imports
const imports = `import { siteData } from '@/data/content';
import TourDate from '@/components/TourDate';
import TrackItem from '@/components/TrackItem';
import GalleryImage from '@/components/GalleryImage';
import MerchItem from '@/components/MerchItem';
`;
content = imports + content;

// 2. Refactor Tour Dates
// Find the div that contains the tour dates. It starts with `<div role="listitem" className="show-item w-dyn-item">`
// and there are multiple of them inside `<div role="list" className="shows-list w-dyn-items">`
const showsListRegex = /(<div\s+role="list"\s+className="shows-list\s+w-dyn-items"\s*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div\s+className="links-bar)/;
content = content.replace(showsListRegex, `$1\n                {siteData.home.shows.map((show) => (<TourDate key={show.id} {...show} />))}\n              $3`);

// 3. Refactor Tracks
const tracksListRegex = /(<div\s+role="list"\s+className="tracklist\s+w-dyn-items"\s*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div\s+className="shows)/;
content = content.replace(tracksListRegex, `$1\n                  {siteData.home.latestAlbum.tracks.map((track) => (<TrackItem key={track.id} {...track} />))}\n                $3`);

// 4. Refactor Gallery
const galleryRegex = /(<div\s+data-w-id="d4ef5742-724b-1bd1-823b-489c22f718da"\s+className="gallery-inner\s+max-width-xxlarge\s+w-container"\s*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<div\s+className="merchandise)/;
content = content.replace(galleryRegex, `$1\n            {siteData.home.gallery.map((img, index) => {
              const modifiers = ["_5", "_4", "_3", "_2", "_1"];
              return <GalleryImage key={img.id} src={img.src} alt={img.alt} classNameModifier={modifiers[index] || ""} />;
            })}\n          $3`);

// 5. Refactor Merch
const merchRegex = /(<div\s+className="merchandise-item-list"\s*>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<\/main>)/;
content = content.replace(merchRegex, `$1\n            {siteData.home.merch.map((item) => (<MerchItem key={item.id} {...item} />))}\n          $3`);

fs.writeFileSync(pageFile, content);
console.log('Refactored page.tsx');
