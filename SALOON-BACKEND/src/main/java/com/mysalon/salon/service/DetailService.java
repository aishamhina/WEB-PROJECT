package com.mysalon.salon.service;

import com.mysalon.salon.model.Detail;
import com.mysalon.salon.repository.DetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class DetailService {

    @Autowired
    private DetailRepository detailRepository;

    public List<Detail> getAllDetails() {
        return detailRepository.findAll();
    }

    public Optional<Detail> getDetailById(Long id) {
        return detailRepository.findById(id);
    }

    public Detail saveDetail(Detail detail) {
        return detailRepository.save(detail);
    }

    public void deleteDetail(Long id) {
        detailRepository.deleteById(id);
    }

    // Additional methods for search and count
    public List<Detail> findByHairstyleDesign(String hairstyleDesign) {
        return detailRepository.findByHairstyleDesign(hairstyleDesign);
    }

    public long countDetails() {
        return detailRepository.count();
    }
}
