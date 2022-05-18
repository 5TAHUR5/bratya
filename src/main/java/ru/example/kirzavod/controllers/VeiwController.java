package ru.example.kirzavod.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VeiwController {

    @GetMapping("/")
    public String getIndex() {
        return "index";
    }

    @GetMapping("/fgh")
    public String fgh() {
        return "fgh";
    }

    @GetMapping("/contacts")
    public String getContacts() {
        return "contacts";
    }

    @GetMapping("/catalog")
    public String catalog() {
        return "catalog";
    }

}
