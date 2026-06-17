package com.beta.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, length = 100)
    private String icon;

    @Column(nullable = false, length = 20)
    private String status = "ACTIVE";

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Feature> features = new ArrayList<>();

    public Product() {}

    public Product(Long id, String name, String description, String icon, String status, LocalDateTime createdAt, List<Feature> features) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.status = status;
        this.createdAt = createdAt != null ? createdAt : LocalDateTime.now();
        this.features = features != null ? features : new ArrayList<>();
    }

    public static ProductBuilder builder() {
        return new ProductBuilder();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public List<Feature> getFeatures() { return features; }
    public void setFeatures(List<Feature> features) { this.features = features; }

    public static class ProductBuilder {
        private Long id;
        private String name;
        private String description;
        private String icon;
        private String status = "ACTIVE";
        private LocalDateTime createdAt;
        private List<Feature> features = new ArrayList<>();

        ProductBuilder() {}

        public ProductBuilder id(Long id) { this.id = id; return this; }
        public ProductBuilder name(String name) { this.name = name; return this; }
        public ProductBuilder description(String description) { this.description = description; return this; }
        public ProductBuilder icon(String icon) { this.icon = icon; return this; }
        public ProductBuilder status(String status) { this.status = status; return this; }
        public ProductBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }
        public ProductBuilder features(List<Feature> features) { this.features = features; return this; }

        public Product build() {
            return new Product(id, name, description, icon, status, createdAt, features);
        }
    }
}
