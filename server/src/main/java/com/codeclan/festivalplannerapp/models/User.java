package com.codeclan.festivalplannerapp.models;

// test class for MongoDB

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("users")
public class User {

    @Id
    private String id;

    private String name;

    public User(String id, String name) {
        super();
        this.id = id;
        this.name = name;
    }

    public User(String name) {
        super();
        this.name = name;
    }

    public User() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
