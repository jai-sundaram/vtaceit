package com.vtaceit.myProjectVtAceIt.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.Month;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class GuideTest {
    private Guide guide1;
    @BeforeEach
    void setUp() {
        guide1 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
    }
    @Test
    public void testGetCourseName(){
        assertThat(guide1.getCourseName()).isEqualTo("Foundations of Engineering");
    }
    @Test
    public void testSetCourseName(){
        guide1.setCourseName("Random");
        assertThat(guide1.getCourseName()).isEqualTo("Random");
    }
    @Test
    public void testGetCourseDept(){
        assertThat(guide1.getCourseDept()).isEqualTo("ENGE");
    }
    @Test
    public void testSetCourseDept(){
        guide1.setCourseDept("MATH");
        assertThat(guide1.getCourseDept()).isEqualTo("MATH");

    }
    @Test
    public void testGetCourseNumber(){
        assertThat(guide1.getCourseNumber()).isEqualTo(1215);
    }

    @Test
    public void testSetCourseNumber(){
        guide1.setCourseNumber(3);
        assertThat(guide1.getCourseNumber()).isEqualTo(3);

    }

    @Test
    public void testGetProfName(){
        assertThat(guide1.getProfName()).isEqualTo("Lo");
    }
    @Test
    public void testSetProfName(){
        guide1.setProfName("James");
        assertThat(guide1.getProfName()).isEqualTo("James");
    }
    @Test
    public void testGetGrade(){
        assertThat(guide1.getGrade()).isEqualTo("A");
    }
    @Test
    public void testSetGrade(){
        guide1.setGrade("B");
        assertThat(guide1.getGrade()).isEqualTo("B");
    }

    @Test
    public void testGetDifficulty(){
        assertThat(guide1.getDifficulty()).isEqualTo(1);
    }
    @Test
    public void testSetDifficulty(){
        guide1.setDifficulty(3);
        assertThat(guide1.getDifficulty()).isEqualTo(3);
    }
    @Test
    public void testGetAttendanceReq(){
        assertThat(guide1.getAttendanceReq()).isEqualTo("Mandatory");

    }
    @Test
    public void testSetAttendanceReq(){
        guide1.setAttendanceReq("Optional");
        assertThat(guide1.getAttendanceReq()).isEqualTo("Optional");

    }
    @Test
    public void testGetComments(){
        assertThat(guide1.getComments()).isEqualTo("very cool class");

    }
    @Test
    public void testSetComments(){
        guide1.setComments("okay class");
        assertThat(guide1.getComments()).isEqualTo("okay class");

    }
    @Test
    public void testGetDate(){
        LocalDate date = LocalDate.of(2000, Month.JANUARY,5);
        assertThat(guide1.getDate()).isEqualTo(date);

    }
    @Test
    public void testSetDate(){
        LocalDate date = LocalDate.of(2001, Month.MAY,5);
        guide1.setDate(LocalDate.of(2001, Month.MAY,5));
        assertThat(guide1.getDate()).isEqualTo(date);
    }
    @Test
    public void testGetSemTaken(){
        assertThat(guide1.getSemTaken()).isEqualTo("Fall 2024");

    }
    @Test
    public void testSetSemTaken(){
        guide1.setSemTaken("Spring 2023");
        assertThat(guide1.getSemTaken()).isEqualTo("Spring 2023");
    }





}