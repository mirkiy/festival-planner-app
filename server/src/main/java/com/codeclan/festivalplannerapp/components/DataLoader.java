package com.codeclan.festivalplannerapp.components;

import com.codeclan.festivalplannerapp.models.User;
import com.codeclan.festivalplannerapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    public DataLoader() {}

    @Override
    public void run(ApplicationArguments args) throws Exception {
        userRepository.save(new User("Jane"));
        userRepository.save(new User("Don"));
    }
}
