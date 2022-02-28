package com.codeclan.festivalplannerapp.repositories;

// test class for MongoDB

import com.codeclan.festivalplannerapp.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    Optional<User> findById(String id);

    long count();
}
