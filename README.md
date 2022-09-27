# MyFirstProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.


## Project description

Application Purpose: display all store item for user to select and add a cart
        From Project (App Store) User Can 
        1-review list of product (description & price )
        2-can add any item by click on add cart 
        3-click on any item to display its data in details and add to cart 
        4-display cart list which contain list of selected items with sum of thier price for revision 
        5-User can remove any item from cart and see the effect on price 
        6-complete filling data of user credit cart 
        7-after final confirmatiion dispaly message with result and recieving details 
        8-from any page user can return to product store 

Technical brief
        define new service : to file with data.json
        define product list read from service
        create function to add to cart
        create cart component to fill with selected item (Use input decorator >> pass selected data through routing )
        create function to sum item prices
        receive data from cart to confirmation under progress (problem time )

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
