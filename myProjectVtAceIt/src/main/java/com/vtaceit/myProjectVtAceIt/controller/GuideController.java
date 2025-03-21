package com.vtaceit.myProjectVtAceIt.controller;

import com.vtaceit.myProjectVtAceIt.model.Guide;
import com.vtaceit.myProjectVtAceIt.service.GuideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@RequestMapping()
public class GuideController {
    private GuideService service;
    @Autowired
    public GuideController(GuideService service) {
        this.service = service;
    }
    //done
    @GetMapping(path="allGuides")
    public List<Guide> getAll(){
        return service.getAll();

    }
    //done
    @GetMapping(path = "getGuides/{dept}/{number}")
    public Optional<List<Guide>> getByIdentifier(@PathVariable("dept") String dept, @PathVariable("number") Integer number){
        return Optional.ofNullable(service.getByIdentifier(dept, number));
    }
    //done
    //add functionality which checks if there is already a dupe in the db
    @PostMapping(path="newGuide")
    public void addGuide(@RequestBody Guide guide){
        service.addGuide(guide);

    }
}
