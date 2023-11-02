// Function to gather all "unlike" buttons
function gatherUnlikeButtons() {
    return Array.from(document.querySelectorAll('[data-testid="unlike"]'));
  }
  
  // Function to gather all "like" buttons
  function gatherLikeButtons() {
    return Array.from(document.querySelectorAll('[data-testid="like"]'));
  }
  
  // Function to wait for a specified duration
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Main function to process the tweets
  async function removeAll() {
    let count = 0;
  
    while (count < 500) {
      const unlikeButtons = gatherUnlikeButtons();
      const likeButtons = gatherLikeButtons();
  
      // If there are no more buttons, break out of the loop
      if (unlikeButtons.length === 0 && likeButtons.length === 0) {
        break;
      }
  
      for (const btn of unlikeButtons) {
        btn.click();
        count++;
        console.log(`Unliked ${count} tweets`);
        await wait(2000); // Wait for 2 seconds between actions
      }
  
      for (const btn of likeButtons) {
        btn.click();
        await wait(2000); // Wait for 2 seconds to allow the "like" to process
        const unlikeBtn = gatherUnlikeButtons().shift(); // Get the first "unlike" button after liking
        if (unlikeBtn) {
          unlikeBtn.click();
          count++;
          console.log(`Unliked ${count} tweets after liking`);
        }
        await wait(2000); // Wait for 2 seconds between actions
      }
    }
  
    console.log(`Finished, total tweets processed: ${count}`);
  }
  
  // Execute the main function
  removeAll();