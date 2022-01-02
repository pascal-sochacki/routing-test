FROM maven:3.6.3-openjdk-17-slim AS MAVEN_BUILD

COPY ./ ./

RUN mvn clean package

FROM openjdk:17.0.1-jdk

COPY --from=MAVEN_BUILD ./target/*.jar /app.jar

EXPOSE 8080

CMD ["java", "-jar", "/app.jar"]
