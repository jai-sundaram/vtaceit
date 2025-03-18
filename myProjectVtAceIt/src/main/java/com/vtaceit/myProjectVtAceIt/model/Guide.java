package com.vtaceit.myProjectVtAceIt.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table
public class Guide {
    @SequenceGenerator(
        name = "guide_sequence",
        sequenceName = "guide_sequence",
        allocationSize = 1

    )
    @GeneratedValue(
            strategy= GenerationType.SEQUENCE,
            generator = "guide_sequence"

    )
    @Id
    private Long guideId;
    private String courseName;
    private String courseIdentifier;
    private String profName;
    private String grade;
    private Integer difficulty;
    private String attendanceReq;
    private String comments;
    private LocalDate postDate;

    //JPA requires a no arg constructor !!!
    public Guide(){}

    public Guide(Long guideId, String courseName, String courseIdentifier, String profName, String grade, Integer difficulty, String attendanceReq, String comments, LocalDate postDate) {
        this.guideId = guideId;
        this.courseName = courseName;
        this.courseIdentifier = courseIdentifier;
        this.profName = profName;
        this.grade = grade;
        this.difficulty = difficulty;
        this.attendanceReq = attendanceReq;
        this.comments = comments;
        this.postDate = postDate;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseIdentifier() {
        return courseIdentifier;
    }

    public void setCourseIdentifier(String courseIdentifier) {
        this.courseIdentifier = courseIdentifier;
    }

    public String getProfName() {
        return profName;
    }

    public void setProfName(String profName) {
        this.profName = profName;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Integer getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Integer difficulty) {
        this.difficulty = difficulty;
    }

    public String getAttendanceReq() {
        return attendanceReq;
    }

    public void setAttendanceReq(String attendanceReq) {
        this.attendanceReq = attendanceReq;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
