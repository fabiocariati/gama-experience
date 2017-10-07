FROM python:3-alpine

RUN apk --update --no-cache add musl-dev musl-utils musl-dbg gcc libevent-dev libxml2-dev libxslt-dev libffi-dev

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/
RUN pip install -r requirements.txt

COPY . /usr/src/app

EXPOSE 5000

CMD [ "python", "./app.py" ]