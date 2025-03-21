package com.vtaceit.myProjectVtAceIt.service;

import com.vtaceit.myProjectVtAceIt.model.Guide;
import com.vtaceit.myProjectVtAceIt.repository.GuideRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.Month;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class GuideServiceTest {
    @Mock
    private GuideRepo repo;

    private GuideService underTest;

    @BeforeEach
    void setUp() {
        underTest = new GuideService(repo);
    }

    @Test
    void getAll() {
        underTest.getAll();

        verify(repo).getAll();
    }
    @Test
    void getByIdentifier() {
        Guide guide = new Guide("Foundations of Engineering", "ENGE", 1216, "James", "B-", 3, "Optional", "very cool class",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
        underTest.addGuide(guide);
        given(repo.getByIdentifier("ENGE",1216)).willReturn(Optional.of(guide));
        underTest.getByIdentifier(guide.getCourseDept(), guide.getCourseNumber());
        verify(repo).getByIdentifier("ENGE", 1216);
    }
    @Disabled
    @Test
    void cannotGetByIdentifier(){

    }
    @Test
    void canAdd() {
        Guide guide1 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
        underTest.addGuide(guide1);
        ArgumentCaptor<Guide> guideArgumentCaptor = ArgumentCaptor.forClass(Guide.class);
        verify(repo).save(guideArgumentCaptor.capture());
        Guide capturedGuide = guideArgumentCaptor.getValue();
        assertThat(capturedGuide).isEqualTo(guide1);
    }
    @Test
    void cannotAdd(){
        Guide guide1 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
        underTest.addGuide(guide1);
        given(repo.alreadyExists(guide1.getCourseName(),guide1.getCourseDept(),guide1.getCourseNumber(), guide1.getProfName(), guide1.getGrade(), guide1.getDifficulty(),guide1.getAttendanceReq(),guide1.getComments(),guide1.getSemTaken())).willReturn(Optional.of(guide1));
        assertThatThrownBy(()->underTest.addGuide(guide1)).isInstanceOf(IllegalStateException.class).hasMessageContaining("Review already exists!");
        verify(repo, never()).save(any());

    }

}