class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            // Sort letters alphabetically to create a unique signature key
            const key = str.split("").sort().join("");

            // Initialize key with an empty array if not present
            if (!map.has(key)) {
                map.set(key, []);
            }

            // Push the original string into the group
            map.get(key).push(str);
        }

        // Return an array of all group arrays stored in the Map
        return Array.from(map.values());
    }
}