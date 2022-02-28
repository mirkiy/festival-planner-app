package com.codeclan.festivalplannerapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class FestivalPlannerAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(FestivalPlannerAppApplication.class, args);
    }

}
