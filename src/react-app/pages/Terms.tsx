export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
          <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>

          <p className="text-gray-700 mb-4">
            Estes Termos de Uso regulam o acesso e uso do site "Aulas de Música
            Online - Professor Daniel Gehlen". Ao utilizar o site, você concorda
            com estes termos.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Uso do Site</h2>
          <p className="text-gray-700">
            Você concorda em utilizar o site para fins lícitos e em conformidade
            com as leis aplicáveis.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. Propriedade Intelectual
          </h2>
          <p className="text-gray-700">
            Os conteúdos disponíveis no site (textos, imagens, videoaulas) são
            de propriedade do autor ou licenciados e não podem ser reproduzidos
            sem autorização.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            3. Isenção de Responsabilidade
          </h2>
          <p className="text-gray-700">
            O site busca informações precisas, mas não garante precisão total. O
            uso do conteúdo é de responsabilidade do usuário.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Alterações</h2>
          <p className="text-gray-700">
            Podemos alterar estes termos a qualquer momento. Mudanças relevantes
            serão informadas no site.
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </div>
    </main>
  );
}
