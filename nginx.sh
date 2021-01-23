docker run \
--rm \
-it \
-v $(pwd)/build:/usr/share/nginx/html \
-p 80:80 \
nginx:1.18.0
