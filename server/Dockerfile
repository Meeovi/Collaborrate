FROM node:9
RUN npm install -g postgraphile
ADD ./run.sh /run.sh
ENV DEFAULT_ROLE anonymous
ENV SCHEMA public
ENV PORT 5000
ENV HOST 0.0.0.0
EXPOSE 5000
CMD bash /run.sh