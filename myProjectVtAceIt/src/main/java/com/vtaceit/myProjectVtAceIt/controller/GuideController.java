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
//adding this annotation to prevent cors errors
@CrossOrigin
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
    ///guides?dept={deptName}&number={courseNumber} will be the actual path
    //if you are using this format, u need to use the @RequestParam annotation instead of @PathVariable annotation
    //also, if you are using request parameters isntead of path variables, you just need the general path, not actually specify the paramaters
    //so it will be just /guides in the path of the GetMapping
    //spring will automatically generate that path
    @GetMapping(path = "/guides")
    public List<Guide> getByIdentifier(@RequestParam(value ="dept", required = true) String deptName, @RequestParam(value = "number", required = true) Integer courseNumber){
            return service.getByIdentifier(deptName, courseNumber);
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
