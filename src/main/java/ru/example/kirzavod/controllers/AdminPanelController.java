package ru.example.kirzavod.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminPanelController {


    @GetMapping(value = ("/" + "adminPanel"))
    public String getHtml() {
        return "adminPanel";
    }

}
