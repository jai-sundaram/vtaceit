package com.vtaceit.myProjectVtAceIt.model;

import jakarta.persistence.*;

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
    private String courseDept;
    private Integer courseNumber;
    private String profName;
    private String grade;
    private Integer difficulty;
    private String attendanceReq;
    private String comments;
    private String semTaken;

    //JPA requires a no arg constructor !!!
    public Guide(){}

    public Guide(String courseName, String courseDept, Integer courseNumber, String profName, String grade, Integer difficulty, String attendanceReq, String comments, String semTaken) {
        this.courseName = courseName;
        this.courseDept = courseDept;
        this.courseNumber = courseNumber;
        this.profName = profName;
        this.grade = grade;
        this.difficulty = difficulty;
        this.attendanceReq = attendanceReq;
        this.comments = comments;
        this.semTaken = semTaken;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDept() {
        return courseDept;
    }

    public void setCourseDept(String courseDept) {
        this.courseDept = courseDept;
    }

    public Integer getCourseNumber() {
        return courseNumber;
    }

    public void setCourseNumber(Integer courseNumber) {
        this.courseNumber = courseNumber;
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

    public String getSemTaken() {
        return semTaken;
    }

    public void setSemTaken(String semTaken) {
        this.semTaken = semTaken;
    }
}
