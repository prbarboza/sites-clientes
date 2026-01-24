<?php
// subscribe.php
// Arquivo seguro – integração com Mailchimp removida

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo json_encode([
        'status' => 'success',
        'message' => 'Mensagem enviada com sucesso.'
    ]);
} else {
    http_response_code(405);
    echo 'Método não permitido';
}
