package ru.example.kirzavod.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import ru.example.kirzavod.domain.Brick;
import ru.example.kirzavod.repo.BrickRepo;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Controller
public class CreateBrickController {

    @Value("${admin.name}")
    private String adminName;

    @Value("${admin.uploadDir}")
    private String uploadPath;

    @Autowired
    private BrickRepo brickRepo;

    @PostMapping("/createBrick")
    public String createBrick(@AuthenticationPrincipal User user,
                              @RequestParam String name,
                              @RequestParam String price,
                              @RequestParam String height,
                              @RequestParam String width,
                              @RequestParam String longB,
                              @RequestParam("file") MultipartFile file) throws IOException {
        if (user.getUsername().equals(adminName)) {
            Brick brick = new Brick();
            brick.setDimension(longB + "см " + width + "см " + height + "см ");
            brick.setName(name);
            brick.setPrice(price);
            if (file != null && !file.getOriginalFilename().isEmpty()) {
                File uploadDir = new File(uploadPath);

                if (!uploadDir.exists()) {
                    uploadDir.mkdir();
                }

                String uuidFile = UUID.randomUUID().toString();
                String resultFilename = uuidFile + "." + file.getOriginalFilename();

                file.transferTo(new File(uploadPath + "/" + resultFilename));

                brick.setImg(resultFilename);
                System.out.println(brick.toString());
                brickRepo.save(brick);
            }

        }
        return "redirect:/adminPanel";
    }

    @GetMapping("/createBrick")
    public  String getHmlCretaeBrick() {
        return "createBrick";
    }

}
