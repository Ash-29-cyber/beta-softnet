package com.beta.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "career_applications")
public class CareerApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @Column(nullable = false, length = 100)
    private String email;

    @Column(nullable = false, length = 20)
    private String phone;

    @Column(name = "resume_url", nullable = false, length = 255)
    private String resumeUrl;

    @Column(nullable = false, length = 100)
    private String position;

    @Column(name = "applied_at", nullable = false)
    private LocalDateTime appliedAt = LocalDateTime.now();

    public CareerApplication() {}

    public CareerApplication(Long id, String fullName, String email, String phone, String resumeUrl, String position, LocalDateTime appliedAt) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.resumeUrl = resumeUrl;
        this.position = position;
        this.appliedAt = appliedAt != null ? appliedAt : LocalDateTime.now();
    }

    public static CareerApplicationBuilder builder() {
        return new CareerApplicationBuilder();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getResumeUrl() { return resumeUrl; }
    public void setResumeUrl(String resumeUrl) { this.resumeUrl = resumeUrl; }

    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }

    public LocalDateTime getAppliedAt() { return appliedAt; }
    public void setAppliedAt(LocalDateTime appliedAt) { this.appliedAt = appliedAt; }

    public static class CareerApplicationBuilder {
        private Long id;
        private String fullName;
        private String email;
        private String phone;
        private String resumeUrl;
        private String position;
        private LocalDateTime appliedAt;

        CareerApplicationBuilder() {}

        public CareerApplicationBuilder id(Long id) { this.id = id; return this; }
        public CareerApplicationBuilder fullName(String fullName) { this.fullName = fullName; return this; }
        public CareerApplicationBuilder email(String email) { this.email = email; return this; }
        public CareerApplicationBuilder phone(String phone) { this.phone = phone; return this; }
        public CareerApplicationBuilder resumeUrl(String resumeUrl) { this.resumeUrl = resumeUrl; return this; }
        public CareerApplicationBuilder position(String position) { this.position = position; return this; }
        public CareerApplicationBuilder appliedAt(LocalDateTime appliedAt) { this.appliedAt = appliedAt; return this; }

        public CareerApplication build() {
            return new CareerApplication(id, fullName, email, phone, resumeUrl, position, appliedAt);
        }
    }
}
