package ru.example.kirzavod.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import ru.example.kirzavod.domain.Brick;
import ru.example.kirzavod.repo.BrickRepo;

import java.io.File;
import java.io.IOException;
import java.util.Objects;
import java.util.UUID;

@Controller
public class AdminPanelController {


    @Value("${admin.name}")
    private String adminName;

    @Value("${admin.uploadDir}")
    private String uploadPath;

    @Autowired
    private BrickRepo brickRepo;

    @PostMapping("/setBrick")
    public String setBrick(@RequestParam String id,
                         @RequestParam String name,
                         @RequestParam String price,
                         @RequestParam String height,
                         @RequestParam String width,
                         @RequestParam String longB,
                         @RequestParam("file") MultipartFile file) throws IOException {
        Brick brick = new Brick();
        brick.setId(Long.valueOf(id));
        brick.setDimension(longB + "см " + width + "см " + height + "см ");
        brick.setName(name);
        brick.setPrice(price);
        if (file != null && !Objects.requireNonNull(file.getOriginalFilename()).isEmpty()) {
            File uploadDir = new File(uploadPath);
            if (!uploadDir.exists()) {
                uploadDir.mkdir();
            }
            String uuidFile = UUID.randomUUID().toString();
            String resultFilename = uuidFile + "." + file.getOriginalFilename();
            file.transferTo(new File(uploadPath + "/" + resultFilename));
            brick.setImg(resultFilename);
            brickRepo.save(brick);
        }
        return "redirect:/adminPanel";
    }

    @GetMapping("/setBrick")
    public String setBrickGet() {
        return "setBrick";
    }

    @GetMapping(value = ("/" + "adminPanel"))
    public String getHtml() {
        return "adminPanel";
    }



}
