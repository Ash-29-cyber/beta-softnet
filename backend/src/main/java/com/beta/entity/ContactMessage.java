package com.beta.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "contact_messages")
public class ContactMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 100)
    private String email;

    @Column(length = 100)
    private String company;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String message;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public ContactMessage() {}

    public ContactMessage(Long id, String name, String email, String company, String message, LocalDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.company = company;
        this.message = message;
        this.createdAt = createdAt != null ? createdAt : LocalDateTime.now();
    }

    public static ContactMessageBuilder builder() {
        return new ContactMessageBuilder();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public static class ContactMessageBuilder {
        private Long id;
        private String name;
        private String email;
        private String company;
        private String message;
        private LocalDateTime createdAt;

        ContactMessageBuilder() {}

        public ContactMessageBuilder id(Long id) { this.id = id; return this; }
        public ContactMessageBuilder name(String name) { this.name = name; return this; }
        public ContactMessageBuilder email(String email) { this.email = email; return this; }
        public ContactMessageBuilder company(String company) { this.company = company; return this; }
        public ContactMessageBuilder message(String message) { this.message = message; return this; }
        public ContactMessageBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }

        public ContactMessage build() {
            return new ContactMessage(id, name, email, company, message, createdAt);
        }
    }
}
