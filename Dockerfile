FROM    node:dubnium

RUN mkdir -p /usr/app
WORKDIR /usr/app

# Copy the app source
COPY . /usr/app
WORKDIR /usr/app
USER root
RUN rm -rf node_modules
# unsafe-perm for link-module-alias
RUN npm install --unsafe-perm
RUN npm run build

# Setup healthcheck
COPY healthcheck.js /etc/health/
HEALTHCHECK --interval=10s --timeout=3s CMD ["node", "/etc/health/healthcheck"]

# Expose the service port
EXPOSE  3000

CMD  ["node", "/usr/app/dist/server.js"]
