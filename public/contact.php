<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validation
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Required fields missing']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Sanitize
$name    = htmlspecialchars($name,    ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$to      = 'taisei925mano@gmail.com';
$subject_line = $subject !== '' ? "[ATELIER] {$subject}" : "[ATELIER] New Inquiry from {$name}";
$body    = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}";
$headers = implode("\r\n", [
    "From: ATELIER Contact <noreply@atelier.jp>",
    "Reply-To: {$email}",
    "Content-Type: text/plain; charset=UTF-8",
    "MIME-Version: 1.0",
]);

$sent = mail($to, $subject_line, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
