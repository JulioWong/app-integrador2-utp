FROM lpicanco/java11-alpine
VOLUME /tmp
ARG JAR_FILE
COPY target/backend-reservation-hotel-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
EXPOSE 8040