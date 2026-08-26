class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles); 
        let bestK = high; // Start with the max possible speed as our default answer

        while (low <= high) {
            // 1. Rename 'mid' to something descriptive!
            let guessedSpeed = Math.floor((low + high) / 2); 
            
            // 2. Declare OUTSIDE the loop so it accumulates, it does NOT wipe
            let total_Hrs = 0; 

            // 3. Calculate hours for this specific guessedSpeed
            for (let i = 0; i < piles.length; i++) {
                total_Hrs += Math.ceil(piles[i] / guessedSpeed);
                
                // OPTIMIZATION: If we already exceeded the time limit, stop counting early!
                // This saves time, but it DOES NOT update low/high yet.
                if (total_Hrs > h) {
                    break; 
                }
            }

            // 4. DECISION TIME (Must be OUTSIDE the for loop)
            // Now we know the final total_Hrs (either from breaking early, or finishing the loop)
            if (total_Hrs <= h) {
                // This speed works! Record it.
                bestK = guessedSpeed; 
                // Try to find a slower (smaller) valid speed
                high = guessedSpeed - 1; 
            } else {
                // This speed is too slow (total_Hrs > h). 
                // We must search the upper half for a faster speed.
                low = guessedSpeed + 1; 
            }
        }
        
        return bestK;
    }
}