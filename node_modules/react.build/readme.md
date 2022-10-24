react.build
======

Description: This is a cli tool that will build a lib folder so that you can publish it on npm. I made this module for an easy way to publish react components from create-react-app(or any react component). Move the files required for your component into their own folder and then run react.build and publish your new lib. react.build runs babel on a directory, runs a transpiler on  js files and copys over every other file in the folder(css and static files)

Requirement: npm install -g babel-cli

install: npm install -g react.build


example:

	$ react.build DIR