package com.beta.controller;

import com.beta.dto.ContactRequest;
import com.beta.entity.ContactMessage;
import com.beta.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactMessage> submitContact(@Valid @RequestBody ContactRequest request) {
        return ResponseEntity.ok(contactService.saveMessage(request));
    }

    @GetMapping("/messages")
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        return ResponseEntity.ok(contactService.getAllMessages());
    }
}
