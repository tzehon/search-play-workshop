---
sidebar_position: 3
---

# Refining Your Queries

Now that we've run a basic query on our Airbnb dataset, let's look at ways to refine and improve our searches.

## Fuzzy Matching

Atlas Search supports fuzzy matching, which can help catch misspellings or variations in spelling:

```json
[{
  $search: {
    "text": {
      "query": "Ocean Veiw",
      "path": "name",
      "fuzzy": {
        "maxEdits": 1
      }
    }
  }
}]
```

This query will match "Ocean View" even though we typed "Ocean Veiw". The `maxEdits` parameter determines how many character changes are allowed.

## Compound Queries

We can combine multiple search criteria using compound queries. Let's search for Big House apartments that accommodate at least 2 people and are priced between $100 and $200 per night:

```json
[{
  $search: {
    "compound": {
      "must": [
        {
          "text": {
            "query": "Big House",
            "path": "name"
          }
        },
        {
          "range": {
            "path": "accommodates",
            "gte": 2
          }
        }
      ],
      "should": [
        {
          "range": {
            "path": "pricePerNight",
            "gte": 100,
            "lte": 200
          }
        }
      ]
    }
  }
}]
```

This query requires that the listing has "Big House", or "Big"/"House" in the name and accommodates at least 2 people. It also gives preference to listings priced between $100 and $200 per night.

## Searching Multiple Fields

We can search across multiple fields at once. Let's search for "home" in either the name or the room type:

```json
[{
  $search: {
    "text": {
      "query": "home",
      "path": ["name", "room_type"]
    }
  }
}]
```

Since the initial index is set to have `"room_type" : { "type" : "token"}` we are expected to hit a full match on the room_type, therefore we are getting only documents with "home" in the name as room type values have "Home" only as a substring.

Now if we change the `INDEX` definition to:
```json
{
  "mappings": {
    "dynamic": true,
    "fields": {
      "room_type": {
        "type": "string"
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


This query will return results where "home" appears in either the name or room_type fields, preferencing both.

## Autocomplete

Let's add an autocomplete example to help users find listings as they type:

```json
[{
  $search: {
    "autocomplete": {
      "query": "Ocean V",
      "path": "name",
      "fuzzy": {
        "maxEdits": 1
      }
    }
  }
}]
```

The original `INDEX` defenition will error out as `"name" : {"type" : "string"}` does not support autocomplete.

Let's replace the `INDEX` defenition: 
```json
{
  "mappings": {
    "dynamic": true,
    "fields": {
      "room_type": {
        "type": "string"
      },
      "accommodates": {
        "type": "number"
      },
      "pricePerNight": {
        "type": "number"
      },
      "name": {
        "type": "autocomplete"
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

Now the query will suggest completions for "Ocean V", which could help users find "Ocean View" listings more easily.

Try these queries in the playground and observe how the results change. Pay attention to how different criteria affect the returned listings.

In the next section, we'll look at even more advanced search features to help users find their perfect Airbnb stay!