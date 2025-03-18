package com.vtaceit.myProjectVtAceIt.repository;

import com.vtaceit.myProjectVtAceIt.model.Guide;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface GuideRepo extends JpaRepository<Guide, Long> {

    //selecting from the Model class, not through database name
    @Query("Select g from Guide g where g.courseDept=?1 and g.courseNumber=?2 order by g.date desc")
    Optional<List<Guide>> getByIdentifier(String courseDept, Integer courseNumber);

    @Query("Select g from Guide g where g.courseName=?1 and g.courseDept=?2 and g.courseNumber=?3 and g.profName=?4 and g.grade=?5 and g.difficulty=?6 and g.attendanceReq=?7 and g.comments=?8 and g.semTaken=?9")
    Optional<Guide> alreadyExists(String courseName, String courseDept, Integer courseNumber, String profName, String grade, Integer difficulty, String attendanceReq, String comments, String semTaken);

    @Query("Select g from Guide g order by g.date desc")
    List<Guide> getByDate();
}
