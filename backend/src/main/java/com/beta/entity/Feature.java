package com.beta.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "features")
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    @JsonIgnore
    private Product product;

    @Column(name = "feature_name", nullable = false)
    private String featureName;

    public Feature() {}

    public Feature(Long id, Product product, String featureName) {
        this.id = id;
        this.product = product;
        this.featureName = featureName;
    }

    public static FeatureBuilder builder() {
        return new FeatureBuilder();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }

    public String getFeatureName() { return featureName; }
    public void setFeatureName(String featureName) { this.featureName = featureName; }

    public static class FeatureBuilder {
        private Long id;
        private Product product;
        private String featureName;

        FeatureBuilder() {}

        public FeatureBuilder id(Long id) { this.id = id; return this; }
        public FeatureBuilder product(Product product) { this.product = product; return this; }
        public FeatureBuilder featureName(String featureName) { this.featureName = featureName; return this; }

        public Feature build() {
            return new Feature(id, product, featureName);
        }
    }
}
