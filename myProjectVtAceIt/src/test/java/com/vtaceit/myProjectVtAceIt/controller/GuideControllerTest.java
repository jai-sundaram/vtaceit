package com.vtaceit.myProjectVtAceIt.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vtaceit.myProjectVtAceIt.config.JacksonConfiguration;
import com.vtaceit.myProjectVtAceIt.model.Guide;
import com.vtaceit.myProjectVtAceIt.service.GuideService;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(GuideController.class)
class GuideControllerTest {
    @MockBean
    private GuideService guideService;
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void getAll() throws Exception {
        Guide guide1 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class", LocalDate.of(2000, Month.JANUARY, 5), "Fall 2024");
        Guide guide2 = new Guide("General Chemistry 1", "CHEM", 1035, "Wagner", "A", 1, "Mandatory", "fun class", LocalDate.of(2021, Month.JANUARY, 5), "Fall 2024");
        Guide guide3 = new Guide("Calculus 1", "MATH", 1225, "Gamble", "A", 1, "Mandatory", "decent class", LocalDate.of(1994, Month.JANUARY, 5), "Fall 2024");
        List<Guide> guides = new ArrayList<>();
        guides.add(guide2);
        guides.add(guide1);
        guides.add(guide3);
        when(guideService.getAll()).thenReturn(guides);
        mockMvc.perform(get("/allGuides")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].courseDept").value("CHEM"))
                .andExpect(jsonPath("$[0].courseNumber").value("1035"))
                .andExpect(jsonPath("$[1].courseDept").value("ENGE"))
                .andExpect(jsonPath("$[1].courseNumber").value("1215"))
                .andExpect(jsonPath("$[2].courseDept").value("MATH"))
                .andExpect(jsonPath("$[2].courseNumber").value("1225"));


    }

    @Test
    void getByIdentifier() throws Exception {
        Guide guide1 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class", LocalDate.of(2000, Month.JANUARY, 5), "Fall 2024");
        Guide guide2 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "B", 3, "Mandatory", "participate in class", LocalDate.of(2000, Month.JANUARY, 5), "Fall 2024");
        List<Guide> guidesList = new ArrayList<>();
        guidesList.add(guide1);
        guidesList.add(guide2);
        //mocking the service response
        when(guideService.getByIdentifier("ENGE", 1215)).thenReturn(guidesList);
        //first specifiying the endpoint and the variable
        mockMvc.perform(get("/guides/{dept}/{number}", "ENGE", 1215)
                        //specifying that it will return a json
                        .contentType(MediaType.APPLICATION_JSON))
                //status should be ok
                .andExpect(status().isOk())
                //specifying some aspects of the result
                .andExpect(jsonPath("$[0].courseDept").value("ENGE"))
                .andExpect(jsonPath("$[0].courseNumber").value("1215"))
                .andExpect(jsonPath("$[0].courseDept").value("ENGE"))
                .andExpect(jsonPath("$[0].courseNumber").value("1215"));
    }
    @Test
    void addGuide() throws Exception {
        Guide guide1 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class", LocalDate.of(2000, Month.JANUARY, 5), "Fall 2024");
        doNothing().when(guideService).addGuide(any(Guide.class));
        mockMvc.perform(post("/newGuide")
                        //passing in the object as a json
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(guide1)))
                .andExpect(status().isOk());
    }

    @Test
            void cannotAddGuide() throws Exception {
                Guide guide1 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class", LocalDate.of(2000, Month.JANUARY, 5), "Fall 2024");
                //if the method u are mocking returns void, use the 'do' method
        //i am using any(Guide.class) instead of a certain Guide object because in a real world scenario, any variant object the Guide object can be passed in, not just one with certain parameters
        //this is useful for mocking
        doThrow(new IllegalStateException("Review already exists!")).when(guideService).addGuide(any(Guide.class));
                mockMvc.perform(post("/newGuide")
                                .contentType(MediaType.APPLICATION_JSON)
                        //cant use any(Guide.class) here because it expects an actual object, not a mock
                                .content(objectMapper.writeValueAsString(guide1)))
                        .andExpect(status().isConflict());

            }
}