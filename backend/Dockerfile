FROM python:3.11.3-alpine
LABEL maintainer="rozetka.com"

ENV PYTHONUNBUFFERED 1

COPY ./rozetka_api/requirements.txt /requirements.txt
COPY ./rozetka_api /app

WORKDIR /app
EXPOSE 8000

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-deps \
        build-base postgresql-dev musl-dev && \
    /py/bin/pip install -r /requirements.txt && \
    apk del .tmp-deps && \
    adduser --disabled-password --no-create-home app && \
    mkdir -p /vol/web/static && \
    mkdir -p /vol/web/media && \
    chowd -R app:app /vol && \
    chowd -R 755 /vol

ENV PATH="/py/bin:$PATH"

USER app

