export default function LGPD() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
          <h1 className="text-3xl font-bold mb-4">
            Política de Proteção de Dados (LGPD)
          </h1>

          <p className="text-gray-700 mb-4">
            Esta página descreve como tratamos dados pessoais em conformidade
            com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Base Legal</h2>
          <p className="text-gray-700">
            Tratamos dados pessoais com base em consentimento, execução de
            contrato, cumprimento de obrigação legal e legítimo interesse quando
            aplicável.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            Direitos do Titular
          </h2>
          <p className="text-gray-700">
            O titular tem direito de acesso, correção, portabilidade,
            eliminação, oposição e revogação do consentimento. Para exercer os
            direitos, entre em contato pelo e-mail harmonia251251@gmail.com
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            Transferência de Dados
          </h2>
          <p className="text-gray-700">
            Podemos compartilhar dados com fornecedores que prestam serviços
            para o site, sempre observando garantias contratuais de segurança e
            confidencialidade.
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </div>
    </main>
  );
}
