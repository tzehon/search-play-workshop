---
sidebar_position: 2
---

# Your First Search Query

Now that we're set up in the Atlas Search Playground, let's write our first query using the Airbnb dataset.

## Understanding the Data

Before we start, let's look at a sample document from our dataset:

```json
{
  "_id": 3,
  "name": "Ocean View Waikiki Marina w/prkg",
  "accommodates": 2,
  "room_type": "Entire home/apt",
  "pricePerNight": 115,
  "host_name": "David",
  "host_email": "david@gmail.com"
}
```

This gives us an idea of the fields we can search on.

## A Simple Text Search

Let's start with a basic text search query to find accommodations with "Ocean View" in the name:

```json
[{
  $search: {
    "text": {
      "query": "Ocean View",
      "path": "name"
    }
  }
}]
```

This query searches for the phrase "Ocean View" in the "name" field of our Airbnb listings.

## Running the Query

To run this query:

1. Copy the above JSON into the Query Panel of the playground.
2. Click the "Run" button in the upper right corner (or press Command + Enter/Return).

You should see results appear in the Results Panel, showing Airbnb listings with "Ocean View" in their name.

## Understanding the Results

Take a moment to look at the results. You'll see that each document in the result set contains a "name" field that includes the phrase "Ocean View". You might also notice other details like the price per night, room type, and host information.

In the next section, we'll explore more advanced query options and how to refine our searches to find the perfect Airbnb listing!