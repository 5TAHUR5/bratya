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
import ru.example.kirzavod.utils.FileIsNullException;

import java.io.IOException;

import static ru.example.kirzavod.utils.Utils.saveImgForBrick;

@Controller
public class AdminPanelController {


    @Value("${admin.name}")
    private String adminName;

    @Value("${admin.uploadDir}")
    private String uploadPath;

    @Autowired
    private BrickRepo brickRepo;

    @SuppressWarnings("null")
    @PostMapping("/setBrick")
    public String setBrick(@AuthenticationPrincipal User user,
                         @RequestParam String name,
                         @RequestParam String id,
                         @RequestParam String price,
                         @RequestParam String height,
                         @RequestParam String width,
                         @RequestParam String longB,
                         @RequestParam(value = "file", required = false) MultipartFile file) throws IOException {
        if (user.getUsername().equals(adminName)) {

            Brick brick = new Brick();
            brick.setId(Long.valueOf(id));
            brick.setDimension(longB + "см " + width + "см " + height + "см ");
            brick.setName(name);
            brick.setPrice(Float.valueOf(price));
            try {
                brick.setImg(saveImgForBrick(file, uploadPath));
            } catch (FileIsNullException e) {
                brick.setImg(brickRepo.findById(brick.getId()).get().getImg());
            }
            brickRepo.save(brick);
        }
        return "redirect:/adminPanel";
    }

    @SuppressWarnings("null")
    @GetMapping("/deleteBrickthj6u4se5y43sea4yr5u")
    public String deleteBrick(@AuthenticationPrincipal User user,
                            @RequestParam Long id) {
        if (user.getUsername().equals(adminName)) {
            brickRepo.deleteById(id);
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
