package com.vtaceit.myProjectVtAceIt.service;

import com.vtaceit.myProjectVtAceIt.model.Guide;
import com.vtaceit.myProjectVtAceIt.repository.GuideRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GuideService {
    private GuideRepo repo;

    @Autowired
    public GuideService(GuideRepo repo) {
        this.repo = repo;
    }

    public List<Guide> getAll() {
        return repo.getAll();
    }


    public List<Guide> getByIdentifier(String dept, Integer number) {
        List<Guide> list = repo.getByIdentifier(dept, number);
        if(!list.isEmpty()){
            return list;
        }
        else{
            throw new IllegalStateException("No reviews fit the criteria");


        }

    }

    public void addGuide(Guide guide) {
        Optional<Guide> exists = repo.alreadyExists(guide.getCourseName(), guide.getCourseDept(), guide.getCourseNumber(), guide.getProfName(), guide.getGrade(), guide.getDifficulty(), guide.getAttendanceReq(), guide.getComments(), guide.getSemTaken());
        if (exists.isPresent()) {
            throw new IllegalStateException("Review already exists!");
        }
        repo.save(guide);

}}
