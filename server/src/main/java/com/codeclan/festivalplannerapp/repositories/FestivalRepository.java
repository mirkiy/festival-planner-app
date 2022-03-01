package com.codeclan.festivalplannerapp.repositories;

import com.codeclan.festivalplannerapp.models.Festival;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FestivalRepository extends MongoRepository<Festival, String> {
    Optional<Festival> findById(String name);
}
