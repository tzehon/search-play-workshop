---
sidebar_position: 4
---

# Advanced Search Techniques

Now that we've covered the basics, let's explore some more advanced search techniques that can help users find the perfect Airbnb listing.


## Faceted Search

Faceted search allows users to narrow down results based on specific attributes.


We will need to adjustb the `INDEX` as follows:
```json 
{
  "mappings": {
    "dynamic": true,
    "fields": {
      "room_type": {
        "type": "stringFacet"
      },
      "accommodates": {
        "type": "number"
      },
      "pricePerNight": {
        "type": "number"
      },
      "name": {
        "type": "string"
      }
    }
  },
  "synonyms": [
    {
      "name": "listingsSynonyms",
      "analyzer": "lucene.standard",
      "source": {
        "collection": "synonym_mappings"
      }
    }
  ]
}
```

Let's create a faceted search for room types:

```json
[{
  $searchMeta: {
    "facet": {
      "operator": {
        "text": {
          "query": ["Ocean"],
          "path": "name"
        }
      },
      "facets": {
        "roomTypes": {
          "type": "string",
          "path": "room_type"
        }
      }
    }
  }
}]
```

This query will return facet counts for different room types among listings that have "Ocean" in their name.

## Highlighting

Highlighting can help users quickly see why a particular listing matched their search. Let's add highlighting to our text search:

```json
  [{
    $search: {
      "text": {
        "query": "Ocean View",
        "path": "name"
      },
      "highlight": {
        "path": "name"
      }
    }
  },
  {
    $project: {
      "name": 1,
      "room_type": 1,
      "accommodates": 1,
      "pricePerNight": 1,
      "highlights": { $meta: "searchHighlights" }
    }
  }
]
```

This query will return results with "Ocean View" in the name, and it will also provide highlighted snippets showing where the match occurred in `highlights` field.

Try these advanced queries in the playground. Notice how they provide more sophisticated ways to search and present the Airbnb listing data.

In the next section, we'll look at how to combine these techniques to create powerful, multi-faceted search experiences!