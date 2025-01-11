# 📘 Atlas Search architecture

![system diagram](/img/system_diagram.png)


## Coupled nodes
![coupled nodes](/img/coupled.png)

## Dedicated search nodes
![dedicated search nodes](/img/search_nodes.png)

## Aggregation pipeline search stages

### $search

where the magic happens

### $searchMeta

The `$searchMeta` stage performs the same search that `$search` does, but only returns the results metadata, not actual matching documents. Results metadata includes the count of matching results and facets. This same metadata is available when using `$search` too, accessible in the $$SEARCH_META context variable.