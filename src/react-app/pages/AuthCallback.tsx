import { useEffect, useState } from 'react';
import { useAuth } from '@getmocha/users-service/react';

export default function AuthCallback() {
  const { exchangeCodeForSessionToken } = useAuth();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        await exchangeCodeForSessionToken();
        setStatus('success');
        
        // Redirect to admin dashboard after successful authentication
        setTimeout(() => {
          window.location.href = '/admin';
        }, 2000);
      } catch (error) {
        console.error('Authentication error:', error);
        setStatus('error');
      }
    };

    handleCallback();
  }, [exchangeCodeForSessionToken]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl text-center">
        {status === 'loading' && (
          <>
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Conectando sua conta...
            </h2>
            <p className="text-gray-600">
              Aguarde enquanto configuramos seu acesso ao dashboard administrativo.
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-3xl">✅</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Login realizado com sucesso!
            </h2>
            <p className="text-gray-600 mb-6">
              Redirecionando para o dashboard administrativo...
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 text-3xl">❌</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Erro na autenticação
            </h2>
            <p className="text-gray-600 mb-6">
              Houve um problema ao conectar sua conta. Tente novamente.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Voltar ao Início
            </button>
          </>
        )}
      </div>
    </div>
  );
}
