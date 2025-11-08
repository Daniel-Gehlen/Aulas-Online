export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
                🎓 Professor Qualificado UFRGS
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professor <span className="text-orange-600">Daniel Gehlen</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Formado em Música pela Universidade Federal do Rio Grande do Sul (UFRGS) com ênfase em violão, 
                tenho mais de 20 anos de experiência ensinando música para alunos de todos os níveis.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Minha abordagem é focada no prazer de aprender música, adaptando as aulas aos seus gostos musicais 
                e objetivos pessoais. Não prometo tornar você um músico profissional em poucas semanas, mas garanto 
                uma jornada musical gratificante e enriquecedora.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ensino Personalizado</h3>
                    <p className="text-gray-600">Cada aluno é único. Adapto as aulas aos seus gostos musicais e ritmo de aprendizado.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Foco no Prazer</h3>
                    <p className="text-gray-600">Minha metodologia prioriza a alegria de tocar suas músicas favoritas desde o início.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Experiência Comprovada</h3>
                    <p className="text-gray-600">Mais de 20 anos formando músicos satisfeitos e realizados em sua jornada musical.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Minha Formação</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <div className="text-2xl font-bold text-yellow-300 mb-2">🎓 Licenciatura em Música</div>
                      <div className="text-orange-100">Ênfase em Violão - UFRGS</div>
                    </div>
                    
                    <div>
                      <div className="text-2xl font-bold text-yellow-300 mb-2">🎸 Instrumentos</div>
                      <div className="text-orange-100">Violão, Guitarra, Ukulêle e Teoria Musical</div>
                    </div>
                    
                    <div>
                      <div className="text-2xl font-bold text-yellow-300 mb-2">⏰ Experiência</div>
                      <div className="text-orange-100">Mais de 20 anos ensinando</div>
                    </div>
                    
                    <div>
                      <div className="text-2xl font-bold text-yellow-300 mb-2">🌐 Modalidade</div>
                      <div className="text-orange-100">Aulas Online ao Vivo</div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="text-sm text-orange-100 mb-2">💡 <strong>Minha filosofia:</strong></p>
                    <p className="text-white">Ensinar música focando no prazer e na satisfação pessoal de cada aluno!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
