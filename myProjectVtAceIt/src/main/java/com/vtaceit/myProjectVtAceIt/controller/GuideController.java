package com.vtaceit.myProjectVtAceIt.controller;

import com.vtaceit.myProjectVtAceIt.model.Guide;
import com.vtaceit.myProjectVtAceIt.service.GuideService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping()
public class GuideController {
    private GuideService service;
    @Autowired
    public GuideController(GuideService service) {
        this.service = service;
    }
    //done
    @GetMapping(path="/allGuides")
    public List<Guide> getAll(){
        return service.getAll();

    }
    //done
    @GetMapping(path = "/guides/{dept}/{number}")
    public List<Guide> getByIdentifier(@PathVariable("dept") String dept, @PathVariable("number") Integer number){
            return service.getByIdentifier(dept, number);
    }
    //done
    //add functionality which checks if there is already a dupe in the db
    @PostMapping(path="/newGuide")
    public ResponseEntity<Object> addGuide(@RequestBody Guide guide){
        try{
            service.addGuide(guide);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(IllegalStateException ie){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }


    }
}
