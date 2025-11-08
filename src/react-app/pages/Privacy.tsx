export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
          <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-gray-700 mb-4">
            Esta Política de Privacidade descreve como coletamos, usamos e
            protegemos os dados pessoais dos visitantes do site "Aulas de Música
            Online - Professor Daniel Gehlen".
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Controlador de Dados
          </h2>
          <p className="text-gray-700">
            Professor Daniel Gehlen — contato: harmonia251251@gmail.com
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. Dados que coletamos
          </h2>
          <p className="text-gray-700">
            Podemos coletar: nome, e-mail, telefone, interesse em cursos e
            mensagens enviadas via formulário.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Finalidades</h2>
          <p className="text-gray-700">
            Os dados são usados para: responder solicitações, agendar aulas
            experimentais, enviar materiais e comunicações relacionadas às
            aulas.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            4. Compartilhamento
          </h2>
          <p className="text-gray-700">
            Não vendemos dados. Podemos compartilhar dados com prestadores de
            serviço (plataformas de e-mail, pagamentos) para cumprir as
            finalidades acima.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            5. Direitos dos Titulares
          </h2>
          <p className="text-gray-700">
            Você tem o direito de acessar, corrigir, excluir seus dados, e
            solicitar portabilidade ou limitação do tratamento. Para exercer
            seus direitos, entre em contato pelo e-mail acima.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Segurança</h2>
          <p className="text-gray-700">
            Adotamos medidas técnicas e administrativas razoáveis para proteger
            seus dados.
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </div>
    </main>
  );
}
