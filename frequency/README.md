## HashMap for Frequency
- Use a hash map (or `Map` in javascript) to count the **frequency** of elements or group them efficiently for O(1) lookups
- Trigger words: "anagrams", "duplicates", "count occurences", "group by something" (Immediately jump to Hashmap if we see "frequency" / "grouping")

### Hook:
>"Buckets for counting - drop each element in its bucket, then check if the bucket overflows"
- Visualize a bunch of buckets labeled with keys
- Each time you drop an item (key) in, its count goes up
- Overflow? Duplicate. No overflow? Unique.

### Formula:
When: Counting frequency, detecting duplicates, grouping items (e.g. Anagrams, First Unique Char).
1. Initialize the map,  
ex:
```js
const map = new Map()
```
>Use `Map` for key-value pairs or `Object` if keys are simple
2. Build the frequency map,  
ex:
```js
for (let ch of str) {
  map.set(ch, (map.get(ch) || 0) + 1)
}
```
3. Process the map
- For duplication,  
ex:
```js
for (let [key, value] of map) {
  if (value > 1) return true
}
```
- For unique character,  
ex:
```js
for (let i = 0; i < str.length; i++) {
  if (map.get(str[i]) === 1) return i
}
```
4. Return result,  
ex:
```js
return -1 // or false if nothing found
```

### 🧠 Mnemonic
M-B-P-R → Map, Build, Process, Return
- Map: Initialize the map
- Build: Fill it with frequencies
- Process: Check condition (duplicate/unique/group)
- Return: Answer or default