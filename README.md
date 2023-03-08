# Certification Tracker - Capgemini

### Getting started

#### Step 1: Clone the repository

#### Step 2: Install the dependencies

Note: if you don't have Node.js installed, you can download it [here](https://nodejs.org/en/download/).

```bash
# install the necessary dependencies
npm i
```

#### Step 3: Set up the database connection

To acces the database, you need to copy the **_`.env.example`_** file and rename it to **_`.env`_**. Then, you need to fill in the values with the ones from your Firebase project.
**The** **_`.env`_** **file is in the .gitignore but verify that you NEVER commit this**

#### Step 4: Run the project

```bash
# run the project
npm run dev
```

#### Step 5: View the project

Open **[http://localhost:3000](http://localhost:3000)** in your browser to see the result. The page will reload automatically when you make changes to the code.

#### Step 6: Generating sample data

In the **_`generateSampleData.mjs`_** file, at the top, set WRITE to true, fill in the values for each collection and run the file with node.
If you wish to see the data in the database after running the file, set READ to true as well.

**Note: Even though there are guards in place to limit the accidental overuse of this function, use it cautiously anyway as read and write operations aren't unlimited.**

**It is good practice to run the file once and then set WRITE and READ to false again.**

```bash
# run the file
node .\generateSampleData.mjs
```

#### Note:

We're using the mobile first approach, so for now you can use the device toolbar in your browser to see how the project would look on mobile. Later on, we'll add layouts for bigger screens.
