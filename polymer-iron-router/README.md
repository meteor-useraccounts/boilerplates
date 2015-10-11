Installing Polymer
==================

Before running the app for the first time, run `bower install` in this directory to install Polymer 1.0 and dependencies.


## Meteor 1.2

to get `differential:vulcanize` working with Meteor 1.2 we need [this PR](https://github.com/Differential/meteor-vulcanize/pull/25)
to be merged.
In the meanwhile you can clone [this branch](https://github.com/ThaumRystra/meteor-vulcanize/tree/fix-meteor-1.2)
to get a local working version of it.

Simply run the following from your terminal:

```
cd yourproject
mkdir packages
cd packages
git clone https://github.com/ThaumRystra/meteor-vulcanize.git
cd meteor-vulcanize
git checkout fix-meteor-1.2
cd ../..
meteor update
meteor
```
