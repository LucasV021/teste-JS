const usuariosPermitidos = ['alice', 'bob', 'charlie', 'david'];

const usuario = 'lucas';

if (usuariosPermitidos.includes(usuario)) {
    console.log(`O usuário "${usuario}" tem permissões especiais.`);
} else {
    console.log(`O usuário "${usuario}" não tem permissões especiais.`);
}
//Esses exemplos demonstram como o método includes é útil para verificar a presença de elementos em arrays em
// situações do mundo real. Ele torna a verificação de pertencimento de elementos a um array uma tarefa simples e eficaz.
