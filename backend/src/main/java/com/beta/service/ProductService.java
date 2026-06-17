package com.beta.service;

import com.beta.dto.ProductDTO;
import com.beta.entity.Feature;
import com.beta.entity.Product;
import com.beta.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
    }

    public Product createProduct(ProductDTO dto) {
        Product product = Product.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .icon(dto.getIcon())
                .status(dto.getStatus() != null ? dto.getStatus() : "ACTIVE")
                .build();

        if (dto.getFeatures() != null) {
            List<Feature> features = dto.getFeatures().stream()
                    .map(name -> Feature.builder().featureName(name).product(product).build())
                    .collect(Collectors.toList());
            product.setFeatures(features);
        }

        return productRepository.save(product);
    }

    public Product updateProduct(Long id, ProductDTO dto) {
        Product product = getProductById(id);
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setIcon(dto.getIcon());
        if (dto.getStatus() != null) {
            product.setStatus(dto.getStatus());
        }

        // Clear existing features and re-add
        product.getFeatures().clear();
        if (dto.getFeatures() != null) {
            List<Feature> features = dto.getFeatures().stream()
                    .map(name -> Feature.builder().featureName(name).product(product).build())
                    .collect(Collectors.toList());
            product.getFeatures().addAll(features);
        }

        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        Product product = getProductById(id);
        productRepository.delete(product);
    }
}
