package com.beta.repository;

import com.beta.entity.CareerApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareerRepository extends JpaRepository<CareerApplication, Long> {
}
