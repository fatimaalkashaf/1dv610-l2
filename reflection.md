# Reflection - Clean Code - Chapter 2 and 3

## Naming - Chapter 2
## A table of names from the public interface

![Naming reflection table](images/naming.png)

## Reflection on Chapter 2
I would say that Chapter 2 has made me more aware of how crucial naming is for the code quality. In the other courses that we previously had, I focused more on making the code work than making it more readable. Now I understand that naming is like a communication between programmers.

In my Note module, I notice that I already followed some rules without thinking about it, especially *Use Intention-Revealing Names* and *Class Names as Nouns*. However, I also see some room for improvement, especially with the pickColor function. For some people, maybe the name suggest that the function chooses between multiple colors, while in reality it validates a color and provides a default. A better name would maybe have been validateColor, as I said in the naming table above.

I also appreciate/like the rule *Don’t Be Cute* because I think it’s easy to get creative with names. But for me, clarity is more important than being creative, and I think I have straightforward names in my code like *Note*, *Notebook*, *add*, and so on.

## Functions - Chapter 3
## A table of the longest methods/functions

![Functions reflection table](images/functions.png)

## Reflection on Chapter 3
I would say that Chapter 3 on functions has been very insightful. The *Do One Thing* principle turned out to be harder to implement than I expected. I think my *update* method is a clear example of that. It updates three different fields, which technically means it does three things. Now that I am writing this reflection, I think it would have been better to have separate methods for each type of update.

I am happy that my functions are generally small and that I have been trying to avoid deep nesting. However, I noticed some code duplication between *searchByText*, *findByColor*, and *findByTag*. They all share similar validation logic and looping structure, and this goes against the *Don’t Repeat Yourself* principle.

Finally, *Command Query Separation* was also something that I never thought about before. My *update* method both modifies the state and returns the updated note. I better way would maybe have been to separate these, so update only modifies and another method could have been used to fetch the results.

## Reflection on my own code quality
Through working on this module and reading Chapters 1-3, I have gained a deeper understanding of code quality. I now see that the readability, maintainability, and clarity are just as important as the functionality of the code.

I initially also miscounted the lines of my code, so I had to add three new methods in my notebook.js (*hasDuplicateTexts*, *getLatestNote*, *getTotalTagCount*). I would say that these also follow the Clean Code principles by being small, doing one thing, and having descriptive names. But one thing I didn’t have time to do with these methods was to add tests for them. The reason for that was that I also needed to finish another assignment in the other course that we have, as well as some personal family matters that Daniel is aware of, which required me to spend a lot of time at the hospital. However, this has taught me the importance, and how to count the lines of code correctly from the start next time. Also, writing this reflection has made me realize that writing code is a skill that can always be improved.

**Strengths in my code:**
- Consistent naming, like nouns for classes and verbs for methods.
- Small functions that follow the Clean Code principles.
- Good separation of responsibilities between classes.

**Areas that can be improved:**
- The code duplication in my search functions that violates the *Don’t Repeat Yourself* principle.
- Could have thought more about 'Command Query Separation* in some of my methods.
- My update method could have been separated in different methods because it’s doing more than one thing.

**The key lesson that I take with me:**
- *We are Authors* - The code that we write is also written for people to read, not just for computers.
- *Later equals never* - We say that we will do it later, but we never do it
- *The Boy Scout Rule* - We should always leave the code cleaner than we found it.

