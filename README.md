# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Anthony Garc**

Time spent: **3** hours spent in total

Link to project: (https://glitch.com/edit/#!/sixth-foul-cobweb)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used w3schools.com to hep with CSS styling! 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
At first it was difficult to adjust to Javascript, HTML, and CSS, as I have been completing coursework in C++ for the past 4 semesters at 
Geogetiwn University. However, to jog my memory I reviewed some old personal projects I had completed in highschool and watched a few linkedIn Learning courses. 
The project was a fun challenge that I enjoyed! One of the things I faced difficulty with was trying to randomize the pitch but still keep it within a reasonable bounds of frequencies.
I ended up using Math.random () to multiplied by ten to generate a high enough base number to then multiply by a hundred to generate a frequency that is within reasonable range. I tested it
using w3schools.com and pressing it about a hundred times to ensure it was within a reasonable pitch to generate sounds that we can hear.
I also had fun implementing a three strike rule and an alert to notify when the user makes an incorrect guess.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I am interested in what a successful web developer does while programming. I want to know how to efficiently design the simple, interactive, aestheticly designed websites.
I am curious as to how extensive, interactive embedded programs run on websites.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
With more time I would've liked to add a musical component to the project. Although the game contains sounds it does not have any musical-creating component. 
I would change the features to create waves of sounds that the user must replicate. As the user replicates more and more sounds, they essentially begin to click out an instrumental. 
This allows for the game have visual functionality, musical functionality, and test one's memory as well.



## License

    Copyright [Anthony Garcia]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.