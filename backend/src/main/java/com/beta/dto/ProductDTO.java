package com.beta.dto;

import java.util.List;

public class ProductDTO {
    private String name;
    private String description;
    private String icon;
    private String status;
    private List<String> features;

    public ProductDTO() {}

    public ProductDTO(String name, String description, String icon, String status, List<String> features) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.status = status;
        this.features = features;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public List<String> getFeatures() { return features; }
    public void setFeatures(List<String> features) { this.features = features; }
}
