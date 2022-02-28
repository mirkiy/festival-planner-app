package com.codeclan.festivalplannerapp.controllers;

import com.codeclan.festivalplannerapp.models.User;
import com.codeclan.festivalplannerapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/tests")
    public List<User> getTests() {

        List<User> users = userRepository.findAll();
        users.forEach(System.out::println);
        return users;
    }
}
