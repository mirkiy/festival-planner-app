package com.codeclan.festivalplannerapp.controllers;

import com.codeclan.festivalplannerapp.helpers.HmacSha1Signature;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class FestivalController {
    @Value("${keys.SECRET_KEY}")
    private String secretKey;

    @Value("${keys.API_KEY}")
    private String apiKey;

    @GetMapping("/festivals")
    public ResponseEntity<Object> jazz() throws Exception {
        // the search will change in future this is for testing
        String search = "festival=jazz";

        // calling the method we got from the Internet for the algorithm
        // we pass the api keys here otherwise it wasn't working 🤷
        String url = HmacSha1Signature.getSignedData(apiKey, secretKey, search);

        // This below is like calling JavaScript's fetch!
        // we pass the url signed up with the algorithm
        // second parameter is how we want the data (so no String lol)
        RestTemplate restTemplate = new RestTemplate();
        Object response = restTemplate.getForObject(url, Object[].class);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
