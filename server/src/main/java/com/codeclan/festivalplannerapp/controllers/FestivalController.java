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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

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
        Object[] response = restTemplate.getForObject(url, Object[].class);

        // Map response to Java object
        // now we create a Festival object. takes two parameters:
        // 1. Name of festival (fringe, jazz, book, etc), works as unique id
        // 2. The whole response we get from festival API as an object
        Festival newFestival = new Festival("jazz", response);

        // we save it
        // POTENTIALLY WE WOULD BE ONLY CREATING OBJECT AND SAVING
        // IF THE FESTIVAL IS NOT ALREADY ON DATABASE
        // BUT THIS IS LIKE A DEMO SO NEVERMIND THAT NOW
        festivalRepository.save(newFestival);

        // now we retrieve back
        // in the future, before running the code above it will check if
        // that festival exists or not (by festival name property, which works as the ID)
        // the .orElse(null) is because findById returns Optional, so need to handle in case returns nothing
        Festival foundFestival = festivalRepository.findById("jazz").orElse(null);
        Object json = foundFestival.getJsonEventObject(); // FIX THIS

        // we send it to the frontend
        return new ResponseEntity<>(json, HttpStatus.OK);
    }
}
