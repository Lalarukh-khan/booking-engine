FROM ubuntu:18.04 as Builder

LABEL Author="Ghulam Mujtaba <GhulamMujtabaKhan@outlook.com>"

# Install Node.js, Yarn and required dependencies
RUN apt-get update \
  && apt-get install -y curl gnupg build-essential \
  && curl --silent --location https://deb.nodesource.com/setup_16.x | bash - \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get remove -y --purge cmdtest \
  && apt-get update \
  && apt-get install -y nodejs yarn \
  # remove useless files from the current layer
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /var/lib/apt/lists.d/* \
  && apt-get autoremove \
  && apt-get clean \
  && apt-get autoclean

WORKDIR /var/www/html

# copy files
ADD . .

# Permissions configurations for API
  #chown the root dir
RUN chown -R www-data:www-data /var/www/html
  #Set file permission to 644:
RUN find /var/www/html -type f -exec chmod 644 {} \;
  #Set directory permission to 755:
RUN find /var/www/html -type d -exec chmod 755 {} \;

#npm install 
RUN npm install && \
    npm run build

FROM nginx
#RUN apk update && apk add bind-tools
WORKDIR /app
COPY default.conf /etc/nginx/conf.d
COPY --from=Builder /var/www/html/dist ./
