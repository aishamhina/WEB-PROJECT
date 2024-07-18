package com.mysalon.salon.controller;

import com.mysalon.salon.model.Detail;
import com.mysalon.salon.service.DetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/details")
public class DetailController {

    @Autowired
    private DetailService detailService;

    @GetMapping
    public List<Detail> getAllDetails() {
        return detailService.getAllDetails();
    }

    @GetMapping("/{id}")
    public Optional<Detail> getDetailById(@PathVariable Long id) {
        return detailService.getDetailById(id);
    }

    @PostMapping
    public Detail createDetail(@RequestBody Detail detail) {
        return detailService.saveDetail(detail);
    }

    @PutMapping("/{id}")
    public Detail updateDetail(@PathVariable Long id, @RequestBody Detail detail) {
        detail.setId(id);
        return detailService.saveDetail(detail);
    }

    @DeleteMapping("/{id}")
    public void deleteDetail(@PathVariable Long id) {
        detailService.deleteDetail(id);
    }

    
    @GetMapping("/search")
    public List<Detail> findByHairstyleDesign(@RequestParam String hairstyleDesign) {
        return detailService.findByHairstyleDesign(hairstyleDesign);
    }

    @GetMapping("/count")
    public long countDetails() {
        return detailService.countDetails();
    }
}
