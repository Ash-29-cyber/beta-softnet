package com.beta.controller;

import com.beta.dto.NewsletterRequest;
import com.beta.entity.NewsletterSubscriber;
import com.beta.service.NewsletterService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/newsletter")
public class NewsletterController {

    private final NewsletterService newsletterService;

    public NewsletterController(NewsletterService newsletterService) {
        this.newsletterService = newsletterService;
    }

    @PostMapping("/subscribe")
    public ResponseEntity<NewsletterSubscriber> subscribe(@Valid @RequestBody NewsletterRequest request) {
        return ResponseEntity.ok(newsletterService.subscribe(request.getEmail()));
    }

    @GetMapping("/subscribers")
    public ResponseEntity<List<NewsletterSubscriber>> getAllSubscribers() {
        return ResponseEntity.ok(newsletterService.getAllSubscribers());
    }
}
