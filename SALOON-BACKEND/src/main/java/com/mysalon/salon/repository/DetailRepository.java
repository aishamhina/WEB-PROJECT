package com.mysalon.salon.repository;

import com.mysalon.salon.model.Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetailRepository extends JpaRepository<Detail, Long> {
    List<Detail> findByHairstyleDesign(String hairstyleDesign);
}
