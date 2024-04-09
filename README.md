# Wordle.recreation.project

This was the first project I built from scratch to deployment. You can play my wordle [here](https://wordle-recreation-project.web.app/). 🍬
 
The word length is changed to 6 and 7 letters.

## the importance of this project to me

My website obviously cannot compare to the original nytimes Wordle. My intention is not to be compared here.

I think what's important is I learned that *a seemingly simple game is not easy to make*.

* **design**: the design of the system and the design of the visual layout are both hard. I didn't mimic any Youtube Wordle tutorials so I focused mainly on figuring out how to get this game work right. By observing how letters and words are updated in the game, I came up with this idea of letting each letter be represented by a class, and each row(word) be represented by another class and the whold board be represented by a class as well. I followed this idea and coded - and the board just combined with words in a way I had expected lol. I think I was lucky at this step.
* **color change algorithm**: then I ran into a long-lived difficulty which was I could not get the color change right 🎨. There are just three colors (green, yellow, grey) and the rules look simple. But when I actually wrote the function and tested, there were many cases letters were colored wrong, such as when one "e" was in the answer but two "e" were colored yellow in the guessing word. That would be a wrong hint to the user. This problem was later suprisingly solved when I served as a TA in a python course. The professor also assigned a Wordle assignment and I found how this algorithm could work by looking into the assignment answers.. So I guess teamwork is very important sometimes 🥲.

## places to improve in my project

If I have more time, I would definitely add more funtionalities/features:

* **a pre-defined word list**: this kind of game must have a standard to define whether a guessing word is a valid word. A valid word should exist in dictionaries but also cannot be too niche, so the standard should be considered very carefully.
* **a virtual keyboard as hint**: I began to realize why nytimes Wordle has a keyboard down at the bottom of the page. It can tell users what letters have not be used. I think this game cannot go without it.

It's a fun learning experience!
