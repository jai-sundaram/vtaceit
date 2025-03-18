package com.vtaceit.myProjectVtAceIt.controller;

import com.vtaceit.myProjectVtAceIt.model.Guide;
import com.vtaceit.myProjectVtAceIt.service.GuideService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping(path="getGuides/{identifier}")
    public Optional<List<Guide>> getByIdentifier(@PathVariable("identifier") String identifier){
        return service.getByIdentifier(identifier);

    }
    @GetMapping(path = "getGuides/{identifier}/{prof}")
    public Optional<List<Guide>> getByIdentifierAndProf(@PathVariable("identifier") String identifier, @PathVariable("prof") String prof){
        return service.getByIdentifierAndProf(identifier, prof);
    }
    //done
    //add functionality which checks if there is already a dupe in the db
    @PostMapping(path="addGuide")
    public void addGuide(@RequestBody Guide guide){
        service.addGuide(guide);

    }




}
