package com.vtaceit.myProjectVtAceIt.controller;

import com.vtaceit.myProjectVtAceIt.model.Guide;
import com.vtaceit.myProjectVtAceIt.service.GuideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping()
public class GuideController {
    private GuideService service;
    @Autowired
    public GuideController(GuideService service) {
        this.service = service;
    }

    @GetMapping(path="allGuides")
    public void showAll(){

    }
    @GetMapping(path="{identifier}")
    public void showByIdentifier(){

    }
    @PostMapping(path="addGuide")
    public void addGuide(@RequestBody Guide guide){
        service.addGuide(guide);

    }




}
