import type { INodeProperties } from "n8n-workflow"

export const properties = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    options: [
      {
        name: "Autocomplete",
        value: "google_autocomplete",
        action: "Google autocomplete",
        description:
          "The suggestions Google offers as a query is typed. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/autocomplete",
          },
        },
      },
      {
        name: "Maps Area Places",
        value: "google_maps_area_places",
        action: "Google maps area places",
        description:
          "Businesses inside a map viewport. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/maps/area/places",
          },
        },
      },
      {
        name: "Maps Place",
        value: "google_maps_place",
        action: "Google maps place",
        description:
          "One business by its Google CID, place ID or feature ID: address, rating, hours, phone, category. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/maps/place",
          },
        },
      },
      {
        name: "Maps Place Photos",
        value: "google_maps_place_photos",
        action: "Google maps place photos",
        description:
          "Photos for one business. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/maps/place/photos",
          },
        },
      },
      {
        name: "Maps Place Reviews",
        value: "google_maps_place_reviews",
        action: "Google maps place reviews",
        description:
          "Reviews for one business, page by page. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/maps/place/reviews",
          },
        },
      },
      {
        name: "Maps Search Places",
        value: "google_maps_search_places",
        action: "Google maps search places",
        description:
          "Local business results for a query. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/maps/search/places",
          },
        },
      },
      {
        name: "Search Images",
        value: "google_search_images",
        action: "Google search images",
        description:
          "Google Images results. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/search/images",
          },
        },
      },
      {
        name: "Search News",
        value: "google_search_news",
        action: "Google search news",
        description:
          "Google News results. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/search/news",
          },
        },
      },
      {
        name: "Search Patents",
        value: "google_search_patents",
        action: "Google search patents",
        description:
          "Google Patents results. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/search/patents",
          },
        },
      },
      {
        name: "Search Shopping",
        value: "google_search_shopping",
        action: "Google search shopping",
        description:
          "Google Shopping results. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/search/shopping",
          },
        },
      },
      {
        name: "Search Videos",
        value: "google_search_videos",
        action: "Google search videos",
        description:
          "Google Videos results. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/search/videos",
          },
        },
      },
      {
        name: "Search Web",
        value: "google_search_web",
        action: "Google search web",
        description:
          "Google web results. Add mode=rich for the full page. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/search/web",
          },
        },
      },
      {
        name: "Trends",
        value: "google_trends",
        action: "Google trends",
        description:
          "Google Trends keyword comparisons, geographic breakdowns, related searches and Trending Now. Each successful call uses one credit unless the account is unlimited.",
        routing: {
          request: {
            method: "POST",
            url: "/google/trends",
          },
        },
      },
    ],
    default: "google_search_web",
  },
  {
    displayName: "Query",
    name: "q",
    description: "The partial query",
    routing: {
      send: {
        type: "body",
        property: "q",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_autocomplete"],
      },
    },
  },
  {
    displayName: "Options",
    name: "options",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        operation: ["google_autocomplete"],
      },
    },
    options: [
      {
        displayName: "Country",
        name: "gl",
        description: "Two-letter country code, such as gb",
        routing: {
          send: {
            type: "body",
            property: "gl",
          },
        },
        type: "string",
        default: "",
      },
      {
        displayName: "Language",
        name: "hl",
        description: "Two-letter language code, such as en",
        routing: {
          send: {
            type: "body",
            property: "hl",
          },
        },
        type: "string",
        default: "",
      },
    ],
  },
  {
    displayName: "Query",
    name: "query",
    description: "The search query",
    routing: {
      send: {
        type: "body",
        property: "query",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_area_places"],
      },
    },
  },
  {
    displayName: "Latitude",
    name: "lat",
    description: "Latitude of the viewport's center",
    routing: {
      send: {
        type: "body",
        property: "lat",
      },
    },
    type: "number",
    default: 0,
    typeOptions: {},
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_area_places"],
      },
    },
  },
  {
    displayName: "Longitude",
    name: "lng",
    description: "Longitude of the viewport's center",
    routing: {
      send: {
        type: "body",
        property: "lng",
      },
    },
    type: "number",
    default: 0,
    typeOptions: {},
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_area_places"],
      },
    },
  },
  {
    displayName: "Options",
    name: "options",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        operation: ["google_maps_area_places"],
      },
    },
    options: [
      {
        displayName: "Limit",
        name: "limit",
        description: "Max number of results to return",
        routing: {
          send: {
            type: "body",
            property: "limit",
          },
        },
        type: "number",
        default: 50,
        typeOptions: {
          minValue: 1,
        },
      },
      {
        displayName: "Offset",
        name: "offset",
        description: "Results to skip",
        routing: {
          send: {
            type: "body",
            property: "offset",
          },
        },
        type: "number",
        default: 0,
        typeOptions: {},
      },
      {
        displayName: "Zoom",
        name: "zoom",
        description: "Google Maps zoom level",
        routing: {
          send: {
            type: "body",
            property: "zoom",
          },
        },
        type: "number",
        default: 0,
        typeOptions: {},
      },
    ],
  },
  {
    displayName: "Place By",
    name: "placeBy",
    type: "options",
    noDataExpression: true,
    options: [
      {
        name: "CID",
        value: "cid",
      },
      {
        name: "Feature ID",
        value: "fid",
      },
      {
        name: "Place ID",
        value: "placeId",
      },
    ],
    default: "cid",
    displayOptions: {
      show: {
        operation: ["google_maps_place"],
      },
    },
  },
  {
    displayName: "CID",
    name: "cid",
    description:
      "Google customer ID, returned on every /places and /map result. Send one of cid, placeId or fid.",
    routing: {
      send: {
        type: "body",
        property: "cid",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_place"],
        placeBy: ["cid"],
      },
    },
  },
  {
    displayName: "Place ID",
    name: "placeId",
    description:
      "Google place ID, such as ChIJwc3zxvNdeUgR7U9zwP-ov3A, the kind the Google Places API returns. Use instead of cid.",
    routing: {
      send: {
        type: "body",
        property: "placeId",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_place"],
        placeBy: ["placeId"],
      },
    },
  },
  {
    displayName: "Feature ID",
    name: "fid",
    description:
      "Google feature ID, such as 0x48795df3c6f3cdc1:0x70bfa8ffc0734fed, returned as fid on every /map result. Use instead of cid.",
    routing: {
      send: {
        type: "body",
        property: "fid",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_place"],
        placeBy: ["fid"],
      },
    },
  },
  {
    displayName: "Place By",
    name: "placeBy",
    type: "options",
    noDataExpression: true,
    options: [
      {
        name: "CID",
        value: "cid",
      },
      {
        name: "Feature ID",
        value: "fid",
      },
      {
        name: "Place ID",
        value: "placeId",
      },
    ],
    default: "cid",
    displayOptions: {
      show: {
        operation: ["google_maps_place_photos"],
      },
    },
  },
  {
    displayName: "CID",
    name: "cid",
    description:
      "Google customer ID, returned on every /places and /map result. Send one of cid, placeId or fid.",
    routing: {
      send: {
        type: "body",
        property: "cid",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_place_photos"],
        placeBy: ["cid"],
      },
    },
  },
  {
    displayName: "Place ID",
    name: "placeId",
    description:
      "Google place ID, such as ChIJwc3zxvNdeUgR7U9zwP-ov3A, the kind the Google Places API returns. Use instead of cid.",
    routing: {
      send: {
        type: "body",
        property: "placeId",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_place_photos"],
        placeBy: ["placeId"],
      },
    },
  },
  {
    displayName: "Feature ID",
    name: "fid",
    description:
      "Google feature ID, such as 0x48795df3c6f3cdc1:0x70bfa8ffc0734fed, returned as fid on every /map result. Use instead of cid.",
    routing: {
      send: {
        type: "body",
        property: "fid",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_place_photos"],
        placeBy: ["fid"],
      },
    },
  },
  {
    displayName: "Place By",
    name: "placeBy",
    type: "options",
    noDataExpression: true,
    options: [
      {
        name: "CID",
        value: "cid",
      },
      {
        name: "Feature ID",
        value: "fid",
      },
      {
        name: "Place ID",
        value: "placeId",
      },
    ],
    default: "cid",
    displayOptions: {
      show: {
        operation: ["google_maps_place_reviews"],
      },
    },
  },
  {
    displayName: "CID",
    name: "cid",
    description:
      "Google customer ID, returned on every /places and /map result. Send one of cid, placeId or fid.",
    routing: {
      send: {
        type: "body",
        property: "cid",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_place_reviews"],
        placeBy: ["cid"],
      },
    },
  },
  {
    displayName: "Place ID",
    name: "placeId",
    description:
      "Google place ID, such as ChIJwc3zxvNdeUgR7U9zwP-ov3A, the kind the Google Places API returns. Use instead of cid.",
    routing: {
      send: {
        type: "body",
        property: "placeId",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_place_reviews"],
        placeBy: ["placeId"],
      },
    },
  },
  {
    displayName: "Feature ID",
    name: "fid",
    description:
      "Google feature ID, such as 0x48795df3c6f3cdc1:0x70bfa8ffc0734fed, returned as fid on every /map result. Use instead of cid.",
    routing: {
      send: {
        type: "body",
        property: "fid",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_place_reviews"],
        placeBy: ["fid"],
      },
    },
  },
  {
    displayName: "Options",
    name: "options",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        operation: ["google_maps_place_reviews"],
      },
    },
    options: [
      {
        displayName: "Language",
        name: "hl",
        description:
          "Two-letter language code, such as de. Reviews in other languages come back with textTranslated in this language. Defaults to en.",
        routing: {
          send: {
            type: "body",
            property: "hl",
          },
        },
        type: "string",
        default: "",
      },
      {
        displayName: "Page Token",
        name: "pageToken",
        description: "The nextPageToken from a previous response",
        routing: {
          send: {
            type: "body",
            property: "pageToken",
          },
        },
        type: "string",
        default: "",
        typeOptions: {
          password: true,
        },
      },
      {
        displayName: "Sort",
        name: "sort",
        description:
          "Review order: relevant (default, Google's own order), newest first, highest rating first, or lowest rating first. Keep the same sort when passing a pageToken.",
        routing: {
          send: {
            type: "body",
            property: "sort",
          },
        },
        type: "options",
        options: [
          {
            name: "Highest",
            value: "highest",
          },
          {
            name: "Lowest",
            value: "lowest",
          },
          {
            name: "Newest",
            value: "newest",
          },
          {
            name: "Relevant",
            value: "relevant",
          },
        ],
        default: "relevant",
      },
    ],
  },
  {
    displayName: "Query",
    name: "q",
    description: "The search query",
    routing: {
      send: {
        type: "body",
        property: "q",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_maps_search_places"],
      },
    },
  },
  {
    displayName: "Options",
    name: "options",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        operation: ["google_maps_search_places"],
      },
    },
    options: [
      {
        displayName: "Latitude",
        name: "lat",
        description: "Latitude of the viewport's center. Omit lat and lng to search nationally.",
        routing: {
          send: {
            type: "body",
            property: "lat",
          },
        },
        type: "number",
        default: 0,
        typeOptions: {},
      },
      {
        displayName: "Limit",
        name: "limit",
        description: "Max number of results to return",
        routing: {
          send: {
            type: "body",
            property: "limit",
          },
        },
        type: "number",
        default: 50,
        typeOptions: {
          minValue: 1,
          maxValue: 200,
        },
      },
      {
        displayName: "Longitude",
        name: "lng",
        description: "Longitude of the viewport's center",
        routing: {
          send: {
            type: "body",
            property: "lng",
          },
        },
        type: "number",
        default: 0,
        typeOptions: {},
      },
    ],
  },
  {
    displayName: "Query",
    name: "q",
    description: "The search query",
    routing: {
      send: {
        type: "body",
        property: "q",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_search_images"],
      },
    },
  },
  {
    displayName: "Query",
    name: "q",
    description: "The search query",
    routing: {
      send: {
        type: "body",
        property: "q",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_search_news"],
      },
    },
  },
  {
    displayName: "Query",
    name: "q",
    description: "The search query",
    routing: {
      send: {
        type: "body",
        property: "q",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_search_patents"],
      },
    },
  },
  {
    displayName: "Options",
    name: "options",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        operation: ["google_search_patents"],
      },
    },
    options: [
      {
        displayName: "Page",
        name: "page",
        description: "1-based page number",
        routing: {
          send: {
            type: "body",
            property: "page",
          },
        },
        type: "number",
        default: 0,
        typeOptions: {
          minValue: 1,
          maxValue: 9007199254740991,
        },
      },
    ],
  },
  {
    displayName: "Query",
    name: "q",
    description: "The search query",
    routing: {
      send: {
        type: "body",
        property: "q",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_search_shopping"],
      },
    },
  },
  {
    displayName: "Query",
    name: "q",
    description: "The search query",
    routing: {
      send: {
        type: "body",
        property: "q",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_search_videos"],
      },
    },
  },
  {
    displayName: "Query",
    name: "q",
    description: "The search query",
    routing: {
      send: {
        type: "body",
        property: "q",
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_search_web"],
      },
    },
  },
  {
    displayName: "Options",
    name: "options",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        operation: ["google_search_web"],
      },
    },
    options: [
      {
        displayName: "Country",
        name: "gl",
        description:
          "Two-letter country code, such as gb. Required when uule is set; choose the country containing that location.",
        routing: {
          send: {
            type: "body",
            property: "gl",
          },
        },
        type: "string",
        default: "",
      },
      {
        displayName: "Date Range",
        name: "tbs",
        description:
          "Date filter. qdr:d is the past day: use h, d, w, m or y for hour, day, week, month or year, with an optional count, as in qdr:m6. For a custom range, send cdr:1,cd_min:1/31/2026,cd_max:3/1/2026 (month/day/year); either end may be left out.",
        routing: {
          send: {
            type: "body",
            property: "tbs",
          },
        },
        type: "string",
        default: "",
      },
      {
        displayName: "Exact Query",
        name: "nfpr",
        description:
          "1 searches for the query exactly as typed, instead of Google's spelling correction",
        routing: {
          send: {
            type: "body",
            property: "nfpr",
          },
        },
        type: "options",
        options: [
          {
            name: "0",
            value: "0",
          },
          {
            name: "1",
            value: "1",
          },
        ],
        default: "0",
      },
      {
        displayName: "Filter",
        name: "filter",
        description:
          "0 also returns the similar results Google normally hides. 1, the default, hides them.",
        routing: {
          send: {
            type: "body",
            property: "filter",
          },
        },
        type: "options",
        options: [
          {
            name: "0",
            value: "0",
          },
          {
            name: "1",
            value: "1",
          },
        ],
        default: "0",
      },
      {
        displayName: "Language",
        name: "hl",
        description:
          "Google's interface language, such as en, de or pt-BR. It sets the page's labels and can change which results rank.",
        routing: {
          send: {
            type: "body",
            property: "hl",
          },
        },
        type: "string",
        default: "",
      },
      {
        displayName: "Location",
        name: "uule",
        description:
          "Canonical-name Google UULE starting with w+. Biases results toward a city in either mode. Requires matching gl; coordinate-form a+ values are not supported.",
        routing: {
          send: {
            type: "body",
            property: "uule",
          },
        },
        type: "string",
        default: "",
      },
      {
        displayName: "Mode",
        name: "mode",
        description:
          "Simple (default) returns organic results only. rich also returns People Also Ask, top stories, the local pack, shopping, images, videos and related searches. It does not return a knowledge panel.",
        routing: {
          send: {
            type: "body",
            property: "mode",
          },
        },
        type: "options",
        options: [
          {
            name: "Rich",
            value: "rich",
          },
          {
            name: "Simple",
            value: "simple",
          },
        ],
        default: "simple",
      },
      {
        displayName: "Offset",
        name: "start",
        description:
          "Offset into Google's results, a multiple of 10 up to 90. Each page holds ten results.",
        routing: {
          send: {
            type: "body",
            property: "start",
          },
        },
        type: "number",
        default: 0,
        typeOptions: {},
      },
      {
        displayName: "Result Countries",
        name: "cr",
        description:
          "Only return pages from these countries, such as countryDE. Join up to ten with |, as in countryDE|countryAT. Unlike gl, which localizes results, this excludes pages from other countries.",
        routing: {
          send: {
            type: "body",
            property: "cr",
          },
        },
        type: "string",
        default: "",
      },
      {
        displayName: "Result Languages",
        name: "lr",
        description:
          "Only return pages written in these languages, such as lang_de. Join up to ten with |, as in lang_de|lang_fr.",
        routing: {
          send: {
            type: "body",
            property: "lr",
          },
        },
        type: "string",
        default: "",
      },
      {
        displayName: "SafeSearch",
        name: "safe",
        description: "Active turns on SafeSearch, which hides explicit results. off turns it off.",
        routing: {
          send: {
            type: "body",
            property: "safe",
          },
        },
        type: "options",
        options: [
          {
            name: "Active",
            value: "active",
          },
          {
            name: "Off",
            value: "off",
          },
        ],
        default: "active",
      },
    ],
  },
  {
    displayName: "Mode",
    name: "mode",
    description: "Keyword analysis (default) or Trending Now country feed",
    routing: {
      send: {
        type: "body",
        property: "mode",
      },
    },
    type: "options",
    default: "keyword",
    options: [
      {
        name: "Keyword",
        value: "keyword",
      },
      {
        name: "Trending",
        value: "trending",
      },
    ],
    displayOptions: {
      show: {
        operation: ["google_trends"],
      },
    },
  },
  {
    displayName: "Keywords",
    name: "keywords",
    description: "Required in keyword mode; compare one to five keywords or topic IDs",
    routing: {
      send: {
        type: "body",
        property: "keywords",
        value: '={{ $value.split(",").map((value) => value.trim()).filter((value) => value) }}',
      },
    },
    type: "string",
    default: "",
    required: true,
    displayOptions: {
      show: {
        operation: ["google_trends"],
        mode: ["keyword"],
      },
    },
  },
  {
    displayName: "Options",
    name: "options",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        operation: ["google_trends"],
        mode: ["keyword"],
      },
    },
    options: [
      {
        displayName: "Category",
        name: "category",
        routing: {
          send: {
            type: "body",
            property: "category",
          },
        },
        type: "number",
        default: 0,
        typeOptions: {
          minValue: 0,
          maxValue: 4294967295,
        },
      },
      {
        displayName: "Language",
        name: "language",
        routing: {
          send: {
            type: "body",
            property: "language",
          },
        },
        type: "string",
        default: "en-US",
      },
      {
        displayName: "Location",
        name: "geo",
        routing: {
          send: {
            type: "body",
            property: "geo",
          },
        },
        type: "string",
        default: "",
      },
      {
        displayName: "Property",
        name: "property",
        routing: {
          send: {
            type: "body",
            property: "property",
          },
        },
        type: "options",
        options: [
          {
            name: "All",
            value: "",
          },
          {
            name: "Froogle",
            value: "froogle",
          },
          {
            name: "Images",
            value: "images",
          },
          {
            name: "News",
            value: "news",
          },
          {
            name: "Youtube",
            value: "youtube",
          },
        ],
        default: "",
      },
      {
        displayName: "Resolutions",
        name: "resolutions",
        description:
          "Geographic breakdowns to fetch; empty uses Google’s default. DMA means US metro areas. Each resolution adds a Google request.",
        routing: {
          send: {
            type: "body",
            property: "resolutions",
          },
        },
        type: "multiOptions",
        options: [
          {
            name: "CITY",
            value: "CITY",
          },
          {
            name: "COUNTRY",
            value: "COUNTRY",
          },
          {
            name: "DMA",
            value: "DMA",
          },
          {
            name: "REGION",
            value: "REGION",
          },
        ],
        default: [],
      },
      {
        displayName: "Sections",
        name: "sections",
        routing: {
          send: {
            type: "body",
            property: "sections",
          },
        },
        type: "multiOptions",
        options: [
          {
            name: "Interest By Region",
            value: "interestByRegion",
          },
          {
            name: "Interest Over Time",
            value: "interestOverTime",
          },
          {
            name: "Related Queries",
            value: "relatedQueries",
          },
          {
            name: "Related Topics",
            value: "relatedTopics",
          },
        ],
        default: ["interestOverTime", "interestByRegion", "relatedQueries", "relatedTopics"],
      },
      {
        displayName: "Time",
        name: "time",
        routing: {
          send: {
            type: "body",
            property: "time",
          },
        },
        type: "string",
        default: "today 12-m",
      },
      {
        displayName: "Timezone",
        name: "timezone",
        routing: {
          send: {
            type: "body",
            property: "timezone",
          },
        },
        type: "number",
        default: 0,
        typeOptions: {
          minValue: -840,
          maxValue: 840,
        },
      },
    ],
  },
  {
    displayName: "Options",
    name: "options",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        operation: ["google_trends"],
        mode: ["trending"],
      },
    },
    options: [
      {
        displayName: "Categories",
        name: "categories",
        description:
          "Trending Now category IDs (different from Explore categories). Match any selected category; empty selects all.",
        routing: {
          send: {
            type: "body",
            property: "categories",
          },
        },
        type: "multiOptions",
        options: [
          {
            name: "1",
            value: 1,
          },
          {
            name: "2",
            value: 2,
          },
          {
            name: "3",
            value: 3,
          },
          {
            name: "4",
            value: 4,
          },
          {
            name: "5",
            value: 5,
          },
          {
            name: "6",
            value: 6,
          },
          {
            name: "7",
            value: 7,
          },
          {
            name: "8",
            value: 8,
          },
          {
            name: "9",
            value: 9,
          },
          {
            name: "10",
            value: 10,
          },
          {
            name: "11",
            value: 11,
          },
          {
            name: "13",
            value: 13,
          },
          {
            name: "14",
            value: 14,
          },
          {
            name: "15",
            value: 15,
          },
          {
            name: "16",
            value: 16,
          },
          {
            name: "17",
            value: 17,
          },
          {
            name: "18",
            value: 18,
          },
          {
            name: "19",
            value: 19,
          },
          {
            name: "20",
            value: 20,
          },
        ],
        default: [],
      },
      {
        displayName: "Hours",
        name: "hours",
        routing: {
          send: {
            type: "body",
            property: "hours",
          },
        },
        type: "options",
        options: [
          {
            name: "4",
            value: 4,
          },
          {
            name: "24",
            value: 24,
          },
          {
            name: "48",
            value: 48,
          },
          {
            name: "168",
            value: 168,
          },
        ],
        default: 24,
      },
      {
        displayName: "Language",
        name: "language",
        routing: {
          send: {
            type: "body",
            property: "language",
          },
        },
        type: "string",
        default: "en-US",
      },
      {
        displayName: "Limit",
        name: "limit",
        description: "Max number of results to return",
        routing: {
          send: {
            type: "body",
            property: "limit",
          },
        },
        type: "number",
        default: 50,
        typeOptions: {
          minValue: 1,
          maxValue: 1000,
        },
      },
      {
        displayName: "Location",
        name: "geo",
        description: "Trending Now country code",
        routing: {
          send: {
            type: "body",
            property: "geo",
          },
        },
        type: "string",
        default: "US",
      },
      {
        displayName: "Timezone",
        name: "timezone",
        routing: {
          send: {
            type: "body",
            property: "timezone",
          },
        },
        type: "number",
        default: 0,
        typeOptions: {
          minValue: -840,
          maxValue: 840,
        },
      },
    ],
  },
] satisfies INodeProperties[]
