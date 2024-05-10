FROM ubuntu:16.04

# Some Environment Variables
ENV HOME /root
ENV DEBIAN_FRONTEND noninteractive

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -yqq \
      wget gcc make g++ build-essential libc6-dev locales ruby ruby-dev && \
    apt-get clean -yqq

RUN apt-get purge -yqq --auto-remove && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Ensure UTF-8 lang and locale
RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen en_US.UTF-8 && \
    update-locale LANG=en_US.UTF-8

ENV LANG       en_US.UTF-8
ENV LC_ALL     en_US.UTF-8

RUN gem install redis -v 3.3.3

ARG redis_version=3.2.9

RUN wget -qO redis.tar.gz http://download.redis.io/releases/redis-${redis_version}.tar.gz \
    && tar xfz redis.tar.gz -C / \
    && mv /redis-$redis_version /redis

RUN (cd /redis && make)

RUN mkdir /redis-conf
RUN mkdir /redis-data

COPY ./docker-data/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod 755 /docker-entrypoint.sh

EXPOSE 7000 7001

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["redis-cluster"]
