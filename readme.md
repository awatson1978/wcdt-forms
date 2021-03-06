## WCDT-Forms

Rewrite of the CRFs and Clinical-Trials apps, with a modularized package-based component/microservice architecture.  Demo version with WCDT form integration.

=========================
#### Installation  
Copy the application to your computer and run it locally:

````sh
  git clone https://github.com/awatson1978/wcdt-forms
  cd wcdt-forms
  meteor
````


=========================
#### Development
You'll want to fetch all of the packages in ``.meteor/packages`` directory into ``/packages`` so you can develop on them locally.

````sh
  cd wcdt-forms

  # clone the necessary directories
  git clone https://github.com/clinical-meteor/clinical-active-entry
  git clone https://github.com/clinical-meteor/clinical-active-questionnaire
  git clone https://github.com/clinical-meteor/clinical-active-record
  git clone https://github.com/clinical-meteor/clinical-barcode
  git clone https://github.com/clinical-meteor/clinical-collaborations
  git clone https://github.com/clinical-meteor/clinical-collaborations-ui
  git clone https://github.com/clinical-meteor/clinical-env
  git clone https://github.com/clinical-meteor/clinical-extended-api
  git clone https://github.com/clinical-meteor/clinical-graphs-dailystats
  git clone https://github.com/clinical-meteor/clinical-hipaa-audit-log
  git clone https://github.com/clinical-meteor/clinical-keybindings
  git clone https://github.com/clinical-meteor/clinical-modals
  git clone https://github.com/clinical-meteor/clinical-overlays
  git clone https://github.com/clinical-meteor/clinical-router
  git clone https://github.com/clinical-meteor/clinical-router-location
  git clone https://github.com/clinical-meteor/clinical-router-middleware-stack
  git clone https://github.com/clinical-meteor/clinical-router-url
  git clone https://github.com/clinical-meteor/clinical-study-picklist
  git clone https://github.com/clinical-meteor/clinical-user-model
  git clone https://github.com/clinical-meteor/clinical-users-picklist
  git clone https://github.com/clinical-meteor/clinical-verification


  # or be adventures, and use the starrynight fetch command, which uses the .meteor/repo file
  starrynight fetch
````

=========================
#### Deployment
Be sure to set the ROOT_URL with the appropriate prefix when deploying behind the proxy server.

````sh
ROOT_URL="http://localhost:3000/CRF" meteor
````


=========================
#### Running Tests  
Copy the application to your computer and run it locally:

````sh
  npm install -g starrynight
  starrynight generate --autoconfig
  starrynight run-tests --framework nightwatch
````


=========================
#### Licensing  

Code is MIT.  Use as you will.
Corning Day Made of Glass video is copyright Corning; all rights reserved.
