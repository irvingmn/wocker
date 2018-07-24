# Conectar wocker con SequelPro

1. Connect to the guest machine via SSH
```$ vagrant ssh```

2. Run a new container named yourproject
```core@wocker ~ $ wocker run --name yourporject```

4 Copy or move your MySQL file to yourproject directory in your local machine
The MySQL file will be synced into the virtual machine and yourproject container.

3. Enter the running container
```core@wocker ~ $ wocker exec -it yourproject bash```

4. Import your database (e.g. yourproject.sql ) using WP-CLI command

```root@****:/var/www/wordpress# wp --allow-root db import yourproject.sql```


__Note: you can only connect to the container created by v0.5.0 or later.__

###Information of database
####Host: wocker.dev (or 172.17.8.23)
####User: wordpress
####Password: wordpress
####Database: wordpress
####Port: 3306__
