package com.beta.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "newsletter_subscribers")
public class NewsletterSubscriber {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(name = "subscribed_at", nullable = false)
    private LocalDateTime subscribedAt = LocalDateTime.now();

    public NewsletterSubscriber() {}

    public NewsletterSubscriber(Long id, String email, LocalDateTime subscribedAt) {
        this.id = id;
        this.email = email;
        this.subscribedAt = subscribedAt != null ? subscribedAt : LocalDateTime.now();
    }

    public static NewsletterSubscriberBuilder builder() {
        return new NewsletterSubscriberBuilder();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public LocalDateTime getSubscribedAt() { return subscribedAt; }
    public void setSubscribedAt(LocalDateTime subscribedAt) { this.subscribedAt = subscribedAt; }

    public static class NewsletterSubscriberBuilder {
        private Long id;
        private String email;
        private LocalDateTime subscribedAt;

        NewsletterSubscriberBuilder() {}

        public NewsletterSubscriberBuilder id(Long id) { this.id = id; return this; }
        public NewsletterSubscriberBuilder email(String email) { this.email = email; return this; }
        public NewsletterSubscriberBuilder subscribedAt(LocalDateTime subscribedAt) { this.subscribedAt = subscribedAt; return this; }

        public NewsletterSubscriber build() {
            return new NewsletterSubscriber(id, email, subscribedAt);
        }
    }
}
