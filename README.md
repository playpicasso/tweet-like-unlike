# tweet-like-unlike
This helps automate the process of unliking tweets from the 'Liked' tweets section on a X profile. It operates directly in the browser using the Dev Console.

How to Use

Log in to your Twitter account on a web browser.
Navigate to the 'Liked' tweets section on your profile.
Open the browser's Developer Console:
Chrome: Right-click anywhere on the page and select Inspect, then click on the Console tab.
Firefox: Right-click anywhere on the page and select Inspect Element, then click on the Console tab.
Copy the entire script from like-unlike.js and paste it into the console.
Scroll down as much as you want to load all the tweets you want to unlike in the current session. (Working on making it auto load in itself)
Press Enter to run the script.
Watch as the script processes your liked tweets, either just unliking them or liking then immediately unliking them.

Features

Processes tweets in sequence: The script will scroll and keep the currently processed tweet visible in the viewport.
Built-in pauses: To avoid triggering Twitter's rate limits, the script has built-in pauses between actions.

Disclaimer

Manipulating the Twitter UI directly using scripts is not officially supported by Twitter and might be against their terms of service. Use this script responsibly and at your own risk.
The script's behavior depends on the current structure of Twitter's web interface. If Twitter makes changes to their website's structure or behavior in the future, the script might not function as expected.

Contributing

If you find any issues with the script or if Twitter updates its UI causing the script to break, please open an issue or submit a pull request.
