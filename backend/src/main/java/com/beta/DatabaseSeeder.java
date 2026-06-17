package com.beta;

import com.beta.entity.Admin;
import com.beta.entity.Feature;
import com.beta.entity.Product;
import com.beta.repository.AdminRepository;
import com.beta.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import java.util.Arrays;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    private final AdminRepository adminRepository;
    private final ProductRepository productRepository;
    private final PasswordEncoder passwordEncoder;

    public DatabaseSeeder(
            AdminRepository adminRepository,
            ProductRepository productRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.adminRepository = adminRepository;
        this.productRepository = productRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        // Seed admin if empty
        if (adminRepository.count() == 0) {
            Admin admin = Admin.builder()
                    .username("admin@betasoftnet.com")
                    .password(passwordEncoder.encode("admin123"))
                    .role("ROLE_ADMIN")
                    .build();
            adminRepository.save(admin);
            System.out.println("Seeded default admin account: admin@betasoftnet.com / admin123");
        }

        // Seed products if empty
        if (productRepository.count() == 0) {
            Product bnxMail = Product.builder()
                    .name("BNX MAIL")
                    .description("WhatsApp-style collaborative email platform.")
                    .icon("Mail")
                    .status("ACTIVE")
                    .build();
            bnxMail.setFeatures(Arrays.asList(
                    new Feature(null, bnxMail, "SMTP Integration"),
                    new Feature(null, bnxMail, "IMAP Integration"),
                    new Feature(null, bnxMail, "Group Inbox"),
                    new Feature(null, bnxMail, "Shared Conversations"),
                    new Feature(null, bnxMail, "Real-Time Messaging"),
                    new Feature(null, bnxMail, "WebSocket Communication")
            ));

            Product b2Auth = Product.builder()
                    .name("B2 AUTH SECURITY")
                    .description("Unified authentication and security platform.")
                    .icon("Shield")
                    .status("ACTIVE")
                    .build();
            b2Auth.setFeatures(Arrays.asList(
                    new Feature(null, b2Auth, "Single Sign-On"),
                    new Feature(null, b2Auth, "Multi-Factor Authentication"),
                    new Feature(null, b2Auth, "Role Management"),
                    new Feature(null, b2Auth, "Identity Verification"),
                    new Feature(null, b2Auth, "Audit Logging"),
                    new Feature(null, b2Auth, "JWT Security")
            ));

            Product cliksPersonal = Product.builder()
                    .name("CLIKS PERSONAL")
                    .description("Personal productivity and organization platform.")
                    .icon("User")
                    .status("ACTIVE")
                    .build();
            cliksPersonal.setFeatures(Arrays.asList(
                    new Feature(null, cliksPersonal, "Task Manager"),
                    new Feature(null, cliksPersonal, "Calendar"),
                    new Feature(null, cliksPersonal, "Notes"),
                    new Feature(null, cliksPersonal, "Personal Dashboard"),
                    new Feature(null, cliksPersonal, "Notifications")
            ));

            Product cliksBusiness = Product.builder()
                    .name("CLIKS BUSINESS")
                    .description("Business collaboration and workflow platform.")
                    .icon("Briefcase")
                    .status("ACTIVE")
                    .build();
            cliksBusiness.setFeatures(Arrays.asList(
                    new Feature(null, cliksBusiness, "Project Management"),
                    new Feature(null, cliksBusiness, "Team Collaboration"),
                    new Feature(null, cliksBusiness, "Business Chat"),
                    new Feature(null, cliksBusiness, "Reports"),
                    new Feature(null, cliksBusiness, "Analytics Dashboard")
            ));

            productRepository.saveAll(Arrays.asList(bnxMail, b2Auth, cliksPersonal, cliksBusiness));
            System.out.println("Seeded default products and features.");
        }
    }
}
