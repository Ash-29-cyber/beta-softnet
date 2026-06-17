-- Seed Data for Beta Corporate Database (beta_db)

USE beta_db;

-- 1. Insert Default Admin (Password is 'admin123' hashed with BCrypt)
-- Hash: $2a$10$mC7M.ZzWvDozY1Nn61W7de3tH2.w7.t8.iG3C1uHj/d/O/b1L1KqK
INSERT INTO admins (username, password, role)
VALUES ('admin@betasoftnet.com', '$2a$10$mC7M.ZzWvDozY1Nn61W7de3tH2.w7.t8.iG3C1uHj/d/O/b1L1KqK', 'ROLE_ADMIN')
ON DUPLICATE KEY UPDATE username=username;

-- 2. Insert Products
INSERT INTO products (id, name, description, icon, status) VALUES
(1, 'BNX MAIL', 'WhatsApp-style collaborative email platform.', 'Mail', 'ACTIVE'),
(2, 'B2AUTH SECURITY', 'Unified authentication and security platform.', 'Shield', 'ACTIVE'),
(3, 'CLIKS', 'Personal productivity and organization platform.', 'User', 'ACTIVE'),
(4, 'CLIKS BUSINESS', 'Business collaboration and workflow platform.', 'Briefcase', 'ACTIVE')
ON DUPLICATE KEY UPDATE name=name;

-- 3. Insert Features
INSERT INTO features (product_id, feature_name) VALUES
-- BNX Mail
(1, 'SMTP Integration'),
(1, 'IMAP Integration'),
(1, 'Group Inbox'),
(1, 'Shared Conversations'),
(1, 'Real-Time Messaging'),
(1, 'WebSocket Communication'),
-- B2 Auth Security
(2, 'Single Sign-On'),
(2, 'Multi-Factor Authentication'),
(2, 'Role Management'),
(2, 'Identity Verification'),
(2, 'Audit Logging'),
(2, 'JWT Security'),
-- Cliks Personal
(3, 'Task Manager'),
(3, 'Calendar'),
(3, 'Notes'),
(3, 'Personal Dashboard'),
(3, 'Notifications'),
-- Cliks Business
(4, 'Project Management'),
(4, 'Team Collaboration'),
(4, 'Business Chat'),
(4, 'Reports'),
(4, 'Analytics Dashboard')
ON DUPLICATE KEY UPDATE feature_name=feature_name;
