package com.beta.service;

import com.beta.entity.NewsletterSubscriber;
import com.beta.repository.NewsletterRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
public class NewsletterService {

    private final NewsletterRepository newsletterRepository;

    public NewsletterService(NewsletterRepository newsletterRepository) {
        this.newsletterRepository = newsletterRepository;
    }

    public NewsletterSubscriber subscribe(String email) {
        if (newsletterRepository.existsByEmail(email)) {
            return newsletterRepository.findByEmail(email).get();
        }
        NewsletterSubscriber subscriber = NewsletterSubscriber.builder()
                .email(email)
                .subscribedAt(LocalDateTime.now())
                .build();
        return newsletterRepository.save(subscriber);
    }

    public List<NewsletterSubscriber> getAllSubscribers() {
        return newsletterRepository.findAll();
    }
}
