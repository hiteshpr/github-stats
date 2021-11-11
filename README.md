# Github Stats

Github Stats is a web application that shows the public profile of a GitHub user.  

Data shown for a particular user - 
<ul>
    <li> GitHub user name</li>
    <li> GitHub profile picture</li>
    <li> GitHub profile bio</li>
    <li> Number of public repos of the user on GitHub</li>
    <li> Number of followers </li>
    <li> Number of accounts user is following</li>
    <li> Name of the user (optional)</li>
    <li> Location of the user (optional)</li>
</ul>

To search for a particular user's data, enter their GitHub user-name in the input box provided.

## Technical stack

The web-app is build using Angular 11.
For styling [Angular Material](https://material.angular.io/) is used.  
For storing the user's search history
[Akita state management library](https://datorama.github.io/akita/) is being used .

Data is being fetched from [GitHub public API](https://docs.github.com/en/rest/overview).


## Demo video  


https://user-images.githubusercontent.com/19280178/141238135-e8874f22-55ea-4307-8558-de8127226ba7.mp4


## Development environment 

Fork and Clone the repositry on your system.  
Run `npm install` to install node-modules.   
Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
