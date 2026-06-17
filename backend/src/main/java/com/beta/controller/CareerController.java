package com.beta.controller;

import com.beta.dto.CareerRequest;
import com.beta.entity.CareerApplication;
import com.beta.service.CareerService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Path;
import java.util.List;

@RestController
@RequestMapping("/api/careers")
public class CareerController {

    private final CareerService careerService;

    public CareerController(CareerService careerService) {
        this.careerService = careerService;
    }

    @PostMapping(value = "/apply", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<CareerApplication> apply(
            @RequestParam("fullName") String fullName,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("position") String position,
            @RequestParam("resume") MultipartFile resume
    ) {
        CareerRequest request = new CareerRequest(fullName, email, phone, position);
        return ResponseEntity.ok(careerService.apply(request, resume));
    }

    @GetMapping("/applications")
    public ResponseEntity<List<CareerApplication>> getAllApplications() {
        return ResponseEntity.ok(careerService.getAllApplications());
    }

    @GetMapping("/resumes/{fileName:.+}")
    public ResponseEntity<Resource> downloadResume(@PathVariable String fileName) {
        try {
            Path filePath = careerService.getResumeFile(fileName);
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.APPLICATION_PDF)
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
