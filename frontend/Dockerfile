FROM node:16-alpine

ARG NODE_ENV=development
ENV NODE_ENV ${NODE_ENV}

ENV PATH="/usr/src/frontend/node_modules/.bin:${PATH}"

RUN mkdir -p /usr/src/frontend
RUN chown node:node /usr/src/frontend

USER node

WORKDIR /usr/src/frontend

# Shared folder, prevent folder creation by root
RUN mkdir -p /home/node/.yarn

# Prevent the reinstallation of node modules at every changes in the source code
COPY --chown=node:node package.json ./
RUN yarn install

COPY --chown=node:node . ./

EXPOSE 3000
CMD [ "yarn", "start" ]