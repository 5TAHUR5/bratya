package ru.example.kirzavod.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import ru.example.kirzavod.domain.Brick;
import ru.example.kirzavod.repo.BrickRepo;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class BrickController {

    @Autowired
    private BrickRepo brickRepo;

    @Value("${admin.name}")
    private String adminName;

    @GetMapping("/publicRest/getBricksDKJuISehg7dBSRfIJOUHJ5654cda")
    public List<Brick> getBricks(@RequestParam String limit,
                                 @RequestParam String page,
                                 @RequestParam(required = false) String search,
                                 @RequestParam String filter_price) {
        Comparator<Brick> brickComparator = (b1, b2) -> {
            if (filter_price.equals("UP")) {
                return b1.getPrice().compareTo(b2.getPrice());
            } else {
                return b2.getPrice().compareTo(b1.getPrice());
            }
        };
        return brickRepo.findAll().stream()
                .filter(brick -> brick.getName().contains(search))
                .sorted(brickComparator)
                .skip((Long.parseLong(page) - 1) * Long.parseLong(limit))
                .limit(Long.parseLong(limit))
                .collect(Collectors.toList());
    }

    @GetMapping("/getAllBricksDKJuISehg7dBSRfIJOUHJ5654cda")
    public List<Brick> getAllBricks(@RequestParam(required = false) String searchByName,
                                    @RequestParam String filter) {
        Comparator<Brick> brickComparator = (b1, b2) -> {
            switch (filter) {
                case "PRICE_DAWN":
                    return b2.getPrice().compareTo(b1.getPrice());
                case "PRICE_UP":
                    return b1.getPrice().compareTo(b2.getPrice());
                case "ID_DAWN":
                    return b2.getId().compareTo(b1.getId());
                default:
                    return b1.getId().compareTo(b2.getId());
            }
        };
        return brickRepo.findAll().stream()
                .filter(brick -> brick.getName().contains(searchByName))
                .sorted(brickComparator)
                .collect(Collectors.toList());
    }



    @GetMapping("/getBricById_xrtjxftthr6uuxr6j64se5gezdryy5uy76")
    public Brick getBrickById(@RequestParam String id) {
        return brickRepo.findById(Long.valueOf(id)).get();
    }

    @GetMapping("/publicRest/getBricksCount_ftjx4eyes3vwr4tfxt4tTBWrftur5")
    public Long getBrickCount(@RequestParam String search) {
        return brickRepo.findAll().stream()
                .filter(brick -> brick.getName().contains(search)).count();
    }

}
