const searchClient = algoliasearch(
  "", // Application ID
  "" // earch-Only API Key
);

const search = instantsearch({
  indexName: "contacts",
  searchClient,
  routing: true
});

search.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 10
  })
]);

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#search-box",
    placeholder: "Search for contacts"
  })
]);

search.addWidgets([
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: document.getElementById("hit-template").innerHTML,
      empty: `We didn't find any results for the search <em>"{{query}}"</em>`
    }
  })
]);

search.start();
