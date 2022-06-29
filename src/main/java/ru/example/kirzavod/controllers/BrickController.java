package ru.example.kirzavod.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.example.kirzavod.domain.Brick;
import ru.example.kirzavod.repo.BrickRepo;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class BrickController {

    @Autowired
    private BrickRepo brickRepo;

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

    @GetMapping("/publicRest/getBricksCount_ftjx4eyes3vwr4tfxt4tTBWrftur5")
    public Long getBrickCount(@RequestParam String search) {
        return brickRepo.findAll().stream()
                .filter(brick -> brick.getName().contains(search)).count();
    }

}
