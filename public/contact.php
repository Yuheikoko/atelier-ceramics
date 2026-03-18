<?php
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

header('Content-Type: application/json; charset=utf-8');

// CORS: 本番ドメインのみ許可
$allowed_origins = [
    'https://atelier.jp',
    'https://www.atelier.jp',
    'http://localhost:4321', // 開発環境
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins, true)) {
    header("Access-Control-Allow-Origin: {$origin}");
}
header('Access-Control-Allow-Methods: POST');
header('Vary: Origin');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Honeypot: ボット対策（非表示フィールド）
if (!empty($_POST['website'])) {
    http_response_code(400);
    exit;
}

// 入力取得
$name    = trim($_POST['name']    ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

// メールアドレス: 改行文字を除去してからバリデーション（ヘッダーインジェクション対策）
$email = preg_replace('/[\r\n\0]/', '', trim($_POST['email'] ?? ''));

// 必須チェック
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Required fields missing']);
    exit;
}

// メール形式バリデーション
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;

}

// サニタイズ（メール本文用）
$name_s    = htmlspecialchars($name,    ENT_QUOTES, 'UTF-8');
$subject_s = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message_s = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$to           = 'taisei925mano@gmail.com';
$subject_line = $subject_s !== '' ? "[ATELIER] {$subject_s}" : "[ATELIER] New Inquiry from {$name_s}";
$body         = "Name: {$name_s}\nEmail: {$email}\n\nMessage:\n{$message_s}";

// ヘッダーインジェクション対策: Reply-To にも改行文字が入らないよう $email は上で除去済み
$headers = implode("\r\n", [
    'From: ATELIER Contact <noreply@atelier.jp>',
    "Reply-To: {$email}",
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
    'X-Mailer: PHP/' . phpversion(),
]);

$sent = mail($to, $subject_line, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    error_log("ATELIER contact form: mail() failed for sender: {$email}");
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
