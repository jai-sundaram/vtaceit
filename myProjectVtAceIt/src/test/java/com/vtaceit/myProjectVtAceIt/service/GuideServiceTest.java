package com.vtaceit.myProjectVtAceIt.service;

import com.vtaceit.myProjectVtAceIt.model.Guide;
import com.vtaceit.myProjectVtAceIt.repository.GuideRepo;
import net.bytebuddy.pool.TypePool;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;

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

    //in this we are only mocking the repo
    //so, we are assuming that the entry exists and therepo will return this given object, so the service should also return this object
   void getByIdentifier() {
        Guide guide = new Guide("Foundations of Engineering", "ENGE", 1216, "James", "B-", 3, "Optional", "very cool class",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
       Guide guide2 = new Guide("Foundations of Engineering", "ENGE", 1216, "Lo", "B-", 3, "Optional", "very cool class",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
       List<Guide> guidesList = new ArrayList<>();
        guidesList.add(guide);
       guidesList.add(guide2);
       when(repo.getByIdentifier("ENGE", 1216)).thenReturn(Optional.of(guidesList));
        repo.getByIdentifier("ENGE", 1216);
        verify(repo).getByIdentifier("ENGE", 1216);
    }
    //inn this case, we are mocking the repo such that no entry with the correspnding coursedept and number exist
    //so, in that case the service class should throw an exception
    //we are only mocking a response from repo, not actually checking if an entry exists in the db 
    @Test
    void cannotGetByIdentifier(){
        List<Guide> guidesList = new ArrayList<>();
        when(repo.getByIdentifier("MATH",  3114)).thenReturn(Optional.of(guidesList));
        assertThatThrownBy(()->underTest.getByIdentifier("MATH",3114)).isInstanceOf(IllegalStateException.class).hasMessageContaining("No reviews fit the criteria");


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
        //providing explicit definition, preventing confusion
        Optional<Guide> guide = Optional.of(guide1);
        given(repo.alreadyExists(guide1.getCourseName(),guide1.getCourseDept(),guide1.getCourseNumber(), guide1.getProfName(), guide1.getGrade(), guide1.getDifficulty(),guide1.getAttendanceReq(),guide1.getComments(),guide1.getSemTaken())).willReturn(guide);
        assertThatThrownBy(()->underTest.addGuide(guide1)).isInstanceOf(IllegalStateException.class).hasMessageContaining("Review already exists!");
        verify(repo, never()).save(any());

    }

}