# Challenge

Welcome to the challenge!

Some packages are already being installed for you below - you can just start reading the below text while that finishes.

## The Introduction

The following script takes you through tasks you should complete as part of your challenge. Some tasks may be tricky, some may be easy. In every case you are encouraged to pose written questions to the task itself, write down questions/observations or reasoning about why you did not find a solution. In most cases though, a working solution will be achievable. In all cases it will be helpful if add notes about your methodology (e.g.: "I did X using Y because of Z, then A happened which I fixed doing B. I should have seen A coming but didn't because of C").

There will be no loop with the reviewer, so nobody is going to answer your notes, questions, musings, ... - their main aim is to showcase your thought process for a fellow developer who will inspect this challenge. For the texts you can write everything from a bullet list to a book, but be aware that in development we usually try to optimize for a combination of dense information + understandability by every team member. We firmly believe that good communication and conceptualization is as important to being a developer as the coding itself.

The challenge tries to be similar to the real-world with the kinds of problems and solutions that would occur in every-day-project-work. There will be no questions asking you to optimize runtime-complexity in O-notation to the max for algorithm Y - these sort of questions do not make any sense in our opinion. Being close to the real-world also means that you may bring in CSS/JS Libraries to help you develop, just make sure that everything still runs in stackblitz.

The tool we use here is called `stackblitz`. It functions as a fully integrated development environment (IDE). You can go through the full challenge here. If you want to use your local environment you can also download the project using the small "cloud icon" at the top left corner of the screen, just right of "Project". _In the end, the challenge code must run in here inside `stackblitz`, so `pnpm run dev` has to work. If this is not the case, we will not be able to review your challenge!_

## Tech-Stack

You can skip this section and revisit it later, as the right information will be shared with you at the right places and everything should "just work" as we inteded it to work. If you still want to learn more right now, read on!

This is a "fullstack" TypeScript project using nuxt3 + vue3. Fullstack TypeScript means that we use one typescript code base for both the backend API + the frontend webapp. We have defined helper commands for development, testing, running the app in production, linting, ... that are runnable via `pnpm run X` where X is the command, checkout the `package.json` for more.

For styling we use TailwindCSS, so far the zoo has not added a CSS component framework to use pre-made components, maybe you will? For testing we use `vitest`, for linting `eslint`.

This information will also be shared with you where needed as part of the challenge, so there is no need to dive into anything at all for now.

## The Challenge

So, without further ado: Welcome, new IT Director of the Cologne Zoo! As you can see, the zoo dashboard was badly damaged by the recent malware attacks from the Duisburg Zoo. The old IT Director quit after that attack as he just could not take it anymore. The staff is looking to you to fix this mess and bring the zoo dashboard back to its former glory! 🐻 🐵 Sadly the IT-Department has been underfunded for years before the attack - so the application is quite dated.

### Task 1: Take stock of the repository

In a first step you should inspect the health of the project and report on everything you notice while doing so. This will help you determine what repairs are necessary in the coming steps.

Please take stock fo the page using developer tools, your instincts, ... and write down below what you find.

// Your solution of task 1
1. The `alert` message get wrecked cologne zoo! that appears on page load indicates the site has been compromised.

2. The variable name `ANlMALS` (with lowercase 'l' instead of 'I') in `animals.get.ts` will cause data loading failures.


### Task 2: Get the basics running again

Now that we know that is broken, let's try to get things running again, step by step. First we should aim to just get the project to start. Please fix the problem that stops `pnpm run dev` from working out. Then:
- document the loaded page with a brief description,
- document the problems that needed to be resolved to make it work (so that we can avoid and quicker fix them in the future!)

Zookeepers reported that the error sometimes changes when reloading the page after the initial start.

// Your solution of task 2

## Fixed Issues:
1. Corrected the variable typo in API file: Changed `ANlMALS` to `ANIMALS` in `server/api/animals.get.ts`
2. Removed the malicious `alert` code from `app.vue`

## Page Description:
The page now loads and shows the Cologne Zoo dashboard with a table of animals sorted by weight.

## Problem Documentation:
The application was failing because of a simple typo in a variable name that prevented the API from returning data properly. The changing errors on reload are likely related to the random nature of the fake data generation, particularly with date rendering issues.

### Task 3: Start the documentation

You got it to work! Nice, now the basic functionality is back for the zookeepers. This would be a great point to start on documenting the project. As you can see there is not even a readme file! The old IT Director seems to have left this project in bad shape. Please add documentation with basics on the project, how to start, stop, test, ... it and whatever else information you deem important.

Add your solution below, either as an inline text or link to new documentation file(s) you've created.

// Your solution of task 3

I added a README.md file to the project. It provides an overview of the project, installation instructions, and basic usage.

### Task 4: Test fixing

There's a failing test that for the age calculation helper. Can you figure out what is broken in the implementation or the test it is and resolve the problem? All zookeepers are really interested in what is going on here.

// Your solution of task 4
Changed the implementation in `utils/useCalculateAgeInYears.ts` from using `Math.round()` to `Math.ceil()` to ensure ages are always rounded up.

```javascript
// Before
- return Math.round(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))

// After
- return Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))
```

### Task 5: UI Fixing and Improvement

The zookeepers report that the table is incomplete and different than usually. More specifically:
- they are missing the `Name` column that used to be in _third_ place,
- the table is sorted by weight, it used to be sorted by name,
- the age of the animals should show the age in years and not the birthdate
    - a composable for this already exists, made by the previous zookeeper

Please fix the two above problems and outline what was necessarry to do so.

// Your solution of task 5

After examining the code in `components/TheAnimalTable.vue`, I found that:

1. The Name column was already present in the table (in the third position).
2. The table was sorting by weight despite the variable being named `animalsSortedByName`.
3. The age calculation utility was already being used but needed the import.

## Changes Made

1. Fixed the sorting logic to sort by name instead of weight:
   ```javascript
   // Before:
   const animalsSortedByName = computed(() =>
     props.animals.slice().sort((animalA, animalB) =>
       animalA.weight - animalB.weight,
     ),
   )

   // After:
   const animalsSortedByName = computed(() =>
     props.animals.slice().sort((animalA, animalB) =>
       animalA.name.localeCompare(animalB.name),
     ),
   )```

## Results
The table now correctly shows:
- Animal name in the third column
- Animals sorted alphabetically by name
- Ages in years instead of raw birthdates

### Task 6: UI Feature 1

The zookeepers want to be able to see all details of an animal. Please create such a view that allows them to do so, outline anything about your process while adding the view below. The zookeepers didn't have time for more information, sorry. They'll surely be glad to criticize the first version intensly though and will want to know why you went for the approach you chose.

// Your solution of 6

Found the animal descriptions in `types.ts`

- The table originally had 6 properties; I added the missing ones.
- Added two new headers: `Height (m)` and `Favourite Fruit`.
- Added corresponding table cells to display these new properties.
- Add all properties from Animal interface in types.d.ts to thead (table header) in TheAnimalTable.vue
- Add properties data to tbody (table body) in TheAnimalTable.vue
- Add some design in TheAnimalTable.vue and app.vue using Tailwind, e.g : color, border, text transform, hover effect

Updated the v-for loop to include the missing values so that they render properly in the table.

### Task 7: Logic Feature

The zookeepers want a new feature: Calculate the food required for the next calendar month. Basically, the zookeepers want to ease their job and buy a month worth of food in advance. In order to do so they want you to calculate and display the food all animals need for the next month.

To calculate the food an animal needs in kilograms in 1 day, the zookeepers use the following formula:
1. Take height + weight and divide it by 250
2. If the animal is:
    - older than 20 years, half the required food,
    - younger than 2 years, double the required food
3. Cherrys have less calories, so if the favourite fruit of the animal are cherries, add 28 kg
4. If the animal is male, add 20 %
5. If the animal is a fish: The required food is 0 kg

// Your solution of 7
I created a utility function called `calculateMonthlyFoodRequirement` inside the `utils` folder, in a file named `calculateMonthlyFoodRequirement.ts`. This function handles the food calculation logic based on the defined rules. It performs the necessary math and rounds the result up to the nearest whole number. The calculated value is then displayed on the detail page of each animal in the list.

### Task 8: Plan New Feature

After the disastrous specification of the new UI feature in the previous task, the zooplanners now want to sit down with you to plan the next feature better before implementation begins. Together you come up with requirements that you write down from the user-perspective (the zookeepers):
- I want to plan when to feed which animal,
- Per animal I want to be able to plan a day + a fruit that I feed them
- There should be an overview of all upcoming feeding tasks that tells me:
    - the animal name,
    - the food fruit,
    - the required amount of food
- the required amount of food is calculated using the algorithm from the previous task
- Tasks should be grouped by day, so that I have something like a "todo" list for each day
    - so for exmaple a structure like:
        - 24.03.2012
            - Anni, Bananas, 20kg
            - Belfried, Cherries, 10kg
        - 27.03.2012
            - ...
        - ...

Please create a breakdown for this feature. You can focus on aspects like: What tasks do we need to cover, what should their order be, how will the UI/UX be designed, what questions arise from the potentially inconsistent or incomplete staff requirements?

Don't spend more thatn 15-30 minutes here - planning like this can quickly become quite complex and we want to prevent this challenge taking too much of your time!

// Your solution of 8
1. First, design a database structure to store feeding tasks with animal, fruit, day, and calculated amount fields
2. Create an intuitive menu/button in the main interface to access the feeding schedule feature
3. Implement a calendar-style UI that groups feeding tasks by day as specified in the requirements
4. Develop a form that allows zookeepers to select an animal, choose a day, and select a fruit for feeding
5. Integrate the existing food calculation algorithm to automatically determine required amounts
6. Create a daily task view that displays all feeding tasks in the format: animal name, food fruit, required amount
7. Group tasks by day to create a "todo" list structure as shown in the example requirements
8. Add functionality to edit or delete existing feeding tasks when schedules change
9. Implement sorting/filtering options to help zookeepers find specific feeding tasks quickly
10. Test the feature with actual zookeepers to ensure it meets their workflow needs
11. Provide simple documentation and tooltips within the UI to help users understand the new feature
12. Consider adding a summary view that shows total food requirements by type to assist with inventory planning. 

This feature requires both backend work for task storage and calculation logic, and frontend development for the calendar view and task entry form. The UI should prioritize a clean, day-based grouping that makes it easy for zookeepers to see their daily feeding responsibilities at a glance.

### Task 9: Finish the documentation

Revisit docs from step 3, see if you want to add anything. Also think about bonuses. Add a general comment about anything (inside the universe of the challenge or out of it) if you want to.

// Your solution
