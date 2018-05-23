# angularapplication
Demo Application using AngularJS 

#This is a demo application for the Contact Management Application using AngularJS.

#To start using this application, you need to have a web server that will handle the request. (eg. nginx)

#If you are using NGINX, change the html folder present with the one shared in this project.

#Change the nginx config file, search for port 80 inside the config file and add the following:
server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }
		
		
		
		location /pages/common {
			root html;
		}

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }
	
	
	
	
	
	
	
# Then run the nginx server by clicking on the application icon of nginx.

#You can check it in the Task Manager

#Once the nginx server is running, you can hit the URL: http://localhost:80/ and start using the application.

#For any queries, please get back to me.

#The hardcoded string literals used in the applcation can be extracted from a trans file or through controller through ng-value, ng-model or ng-bind

#This application provides functionality for adding a contact information, editing details of a contact, deleting contact and displaying all the contacts.(Based on AngularJS)
