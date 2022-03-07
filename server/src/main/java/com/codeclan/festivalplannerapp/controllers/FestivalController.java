package com.codeclan.festivalplannerapp.controllers;

import com.codeclan.festivalplannerapp.helpers.HmacSha1Signature;
import com.codeclan.festivalplannerapp.models.Festival;
import com.codeclan.festivalplannerapp.repositories.FestivalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FestivalController {
    @Autowired
    FestivalRepository festivalRepository;

    @Value("${keys.SECRET_KEY}")
    private String secretKey;

    @Value("${keys.API_KEY}")
    private String apiKey;

    @GetMapping("/festivals")
    public ResponseEntity<Object> jazz(@RequestParam(value = "id", required = false) String id) throws Exception {
        /* ADDED: CHECK IF IN DATABASE ALREADY
        Festival found = festivalRepository.findById(id).orElse(null);
        if (found != null ){
            // if found, return it from database
            return new ResponseEntity<>(found.getJsonEventObject(), HttpStatus.OK);
        }
         */


        // if not found, we will get it from API, upload to our database and then send it back to user
        // calling the method we got from the Internet for the algorithm
        // we pass the api keys here otherwise it wasn't working 🤷
//        String url = HmacSha1Signature.getSignedData(apiKey, secretKey, "festival=" + id);
        String url = HmacSha1Signature.getSignedData(apiKey, secretKey, "festival=" + id);


        // This below is like calling JavaScript's fetch!
        // we pass the url signed up with the algorithm
        // second parameter is how we want the data (so no String lol)
        RestTemplate restTemplate = new RestTemplate();
        Object[] response = restTemplate.getForObject(url, Object[].class);

        /* ADDED: RETURN ERROR IF NOTHING SHOWN
        // we check that the response is not empty (we need to check it on the Festival model)
        // if it's empty, we want to throw an Exception not a valid Response Entity.
        if (response.length <= 0)  {
            throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "entity not found");
        }
         */

        // Map response to Java object
        // now we create a Festival object. takes two parameters:
        // 1. Name of festival (fringe, jazz, book, etc), works as unique id
        // 2. The whole response we get from festival API as an object
        Festival newFestival = new Festival(id, response);

        // we save it in our database
        festivalRepository.save(newFestival);

        // we send the response back to the frontend
        return new ResponseEntity<>(newFestival.getJsonEventObject(), HttpStatus.OK);
    }
}
