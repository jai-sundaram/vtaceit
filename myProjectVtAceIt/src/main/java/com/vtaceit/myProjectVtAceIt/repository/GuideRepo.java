package com.vtaceit.myProjectVtAceIt.repository;

import com.vtaceit.myProjectVtAceIt.model.Guide;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface GuideRepo extends JpaRepository<Guide, Long> {

    //selecting from the Model class, not through database name
    @Query("Select g from Guide g where g.courseDept=?1 and g.courseNumber=?2")
    Optional<List<Guide>> getByIdentifier(String courseDept, Integer courseNumber);

}
