package com.vtaceit.myProjectVtAceIt.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
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
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(GuideController.class)
class GuideControllerTest {
    @MockBean
    private GuideService guideService;
    @Autowired
    private MockMvc mockMvc;

    @Test
    @Disabled
    void getAll() {
    }

    @Test
    void getByIdentifier() throws Exception {
        Guide guide1 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "A", 1, "Mandatory", "very cool class",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
        Guide guide2 = new Guide("Foundations of Engineering", "ENGE", 1215, "Lo", "B", 3, "Mandatory", "participate in class",  LocalDate.of(2000, Month.JANUARY,5), "Fall 2024");
        List<Guide> guidesList = new ArrayList<>();
        guidesList.add(guide1);
        guidesList.add(guide2);
        //mocking the service response
        when(guideService.getByIdentifier("ENGE",1215)).thenReturn(guidesList);
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
    @Disabled
    @Test
    void addGuide() {
    }
}