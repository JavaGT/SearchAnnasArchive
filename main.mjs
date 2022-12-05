import fetch from "node-fetch";
import { parse } from 'node-html-parser';

export default async function search(query) {
    // encode url and fetch
    query = encodeURIComponent(query);
    const url = `https://annas-archive.org/search?q=${query}`;
    const response = await fetch(url);
    const html = await response.text();
    // console.log(html)
    const document = parse(html.replace(/\<\!\-\-/g, '').replace(/\-\-\>/g, ''))
    const wrapelement = document.querySelectorAll('.mb-4')[3]
    const info = processEntry(wrapelement)
    const links = wrapelement.querySelectorAll('a').map(a => a.getAttribute('href'))
    const img = wrapelement.querySelectorAll('img').map(a => a.getAttribute('src'))
    return {
        request_url: url,
        query,
        timestamp: Date.now(),
        results: links.map((href, i) => {
            return {
                href,
                img: img[i],
                info: [info[i * 4], info[i * 4 + 1], info[i * 4 + 2], info[i * 4 + 3]]
            }
        })
    }
}

function splitTrim(x, del = ',') {
    return x.split(del).map(x => x.trim())
}
function processEntry(element) {
    return element.text.split('\n').map(x => x.trim()).filter(x => x)
}