package com.beta.service;

import com.beta.dto.CareerRequest;
import com.beta.entity.CareerApplication;
import com.beta.repository.CareerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class CareerService {

    private final CareerRepository careerRepository;
    private final Path fileStorageLocation;

    public CareerService(CareerRepository careerRepository) {
        this.careerRepository = careerRepository;
        this.fileStorageLocation = Paths.get("./uploads/resumes").toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    public CareerApplication apply(CareerRequest request, MultipartFile resume) {
        String fileName = UUID.randomUUID().toString() + "_" + resume.getOriginalFilename();
        try {
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(resume.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException ex) {
            throw new RuntimeException("Could not store file " + fileName + ". Please try again!", ex);
        }

        String resumeUrl = "/api/careers/resumes/" + fileName;

        CareerApplication application = CareerApplication.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .position(request.getPosition())
                .resumeUrl(resumeUrl)
                .appliedAt(LocalDateTime.now())
                .build();

        return careerRepository.save(application);
    }

    public List<CareerApplication> getAllApplications() {
        return careerRepository.findAll();
    }

    public Path getResumeFile(String fileName) {
        return this.fileStorageLocation.resolve(fileName).normalize();
    }
}
