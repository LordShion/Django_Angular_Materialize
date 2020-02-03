# README #


### Django Api + angular + materialize ###

* Simple Django api project with angular front with materialize for quickstarting a project with user login and logout, in a single page webapp style
* version 0.1


### How do I get set up? ###

* Setup:
    
    -install api requirements
    
    <code>pip install -r requirements.txt</code>
    
    - create and activate your virtualenv for project
    - create db
    
    <code>./manage.py migrate</code>
    
    - create a superuser
     
    <code>./manage.py createsuperuser</code>
    
    - install front depedencies
    
    <code>cd front</code>
    
    <code>npm install</code>
    
* Running

    - api back
    
    <code>./manage.py runserver 0.0.0.0:8080</code>
    
    - front
    
    <code>cd front</code>
    
    <code>ng serve</code>
    
* Running with nginx
    - add conf/nginx/angular-django.conf to /etc/nginx/conf.d
    
* Configuration (no real configuration for now)
* Dependencies (requirements.txt and package.json)
* Database configuration
* How to run tests (no test for now)
* Deployment instructions (no real deployement for now)

### Contribution guidelines ###

* Writing tests ( to do )
* Code review ( to do )
* Other guidelines ( to do )
