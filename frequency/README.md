## HashMap for Frequency
- Use a hash map (or `Map` in javascript) to count the **frequency** of elements or group them efficiently for O(1) lookups
- Trigger words: "anagrams", "duplicates", "count occurences", "group by something" (Immediately jump to Hashmap if we see "frequency" / "grouping")

### Hook:
>"Buckets for counting - drop each element in its bucket, then check if the bucket overflows"
- Visualize a bunch of buckets labeled with keys
- Each time you drop an item (key) in, its count goes up
- Overflow? Duplicate. No overflow? Unique.