FROM node:16-alpine

ARG NODE_ENV=development
ENV NODE_ENV ${NODE_ENV}

ENV PATH="/usr/src/backend/node_modules/.bin:${PATH}"

RUN mkdir -p /usr/src/backend
RUN chown node:node /usr/src/backend

USER node

WORKDIR /usr/src/backend

# Shared folder, prevent folder creation by root
RUN mkdir -p /home/node/.yarn

# Prevent the reinstallation of node modules at every changes in the source code
COPY --chown=node:node package.json ./
RUN yarn install

COPY --chown=node:node . ./

EXPOSE 4000
CMD [ "yarn", "start" ]