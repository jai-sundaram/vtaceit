package com.vtaceit.myProjectVtAceIt.repository;

import com.vtaceit.myProjectVtAceIt.model.Guide;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
@DataJpaTest
class GuideRepoTest {
    @Autowired
    private GuideRepo underTest;

    @Test
    void tearDown() {
        underTest.deleteAll();
    }
    @Test
    void getByDate() {
        Guide guide1 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
        Guide guide2 = new Guide("General Chemistry 1", "CHEM", 1035, "Wagner", "A", 1, "Mandatory", "fun class",  LocalDate.of(2021, Month.JANUARY,5), "Fall 2024");
        Guide guide3 = new Guide("Calculus 1", "MATH", 1225, "Gamble", "A", 1, "Mandatory", "decent class",  LocalDate.of(1994, Month.JANUARY,5), "Fall 2024");
        underTest.save(guide1);
        underTest.save(guide2);
        underTest.save(guide3);

        List<Guide> results = underTest.getAll();
        assertThat(results.getFirst()).isEqualTo(guide2);
        assertThat(results.get(1)).isEqualTo(guide1);
        assertThat(results.getLast()).isEqualTo(guide3);
    }
    @Test
    void getByIdentifier() {
        Guide guide1 = new Guide("Foundations of Engineering I", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class ",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
        Guide guide2 = new Guide("Foundations of Engineering II", "ENGE", 1216, "James", "A-", 1, "Mandatory", "Interesting class",  LocalDate.of(2025, Month.FEBRUARY,10), "Spring 2025");
        Guide guide3 = new Guide("Software Design & Data Structures ", "CS", 2114, "Ellis", "A", 2, "Optional", "Useful for career",  LocalDate.of(2024, Month.DECEMBER,10), "Fall 2024");
        Guide guide4 = new Guide("Intro to Computer Organization I", "CS", 2505, "McPherson", "B", 4, "Mandatory", "Study EVERY day",  LocalDate.of(2025, Month.APRIL,10), "Spring 2025");
        Guide guide5 = new Guide("Intro to Computer Organization I", "CS", 2505, "Cao", "C-", 5, "Mandatory", "Keep practicing!",  LocalDate.of(2025, Month.MAY,13), "Spring 2025");
        underTest.save(guide1);
        underTest.save(guide2);
        underTest.save(guide3);
        underTest.save(guide4);
        underTest.save(guide5);
        List<Guide> myResults = underTest.getByIdentifier("CS",2505);

        assertThat(myResults.size()).isEqualTo(2);
        assertThat(myResults.getFirst()).isEqualTo(guide5);
        assertThat(myResults.getLast()).isEqualTo(guide4);

    }

    @Test
    void alreadyExists() {
        Guide guide = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class bro",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
        underTest.save(guide);
        boolean alreadyThere = underTest.alreadyExists(guide.getCourseName(), guide.getCourseDept(), guide.getCourseNumber(), guide.getProfName(), guide.getGrade(), guide.getDifficulty(), guide.getAttendanceReq(), guide.getComments(), guide.getSemTaken()).isPresent();
        assertThat(alreadyThere).isTrue();
    }
}