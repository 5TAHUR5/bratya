package ru.example.kirzavod.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.example.kirzavod.domain.Brick;

@Repository
public interface BrickRepo extends JpaRepository<Brick, Long> {



}
