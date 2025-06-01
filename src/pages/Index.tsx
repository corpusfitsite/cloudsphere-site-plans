
import { Check, X, Zap, Globe, Settings, RefreshCw, Bot, ShoppingCart, CreditCard, BarChart3, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const plans = [
    {
      name: "Site Express",
      icon: "🍟",
      type: "Básico (3 pág.)",
      price: 500,
      monthly: 0,
      speed: "Lenta (free)",
      domain: false,
      maintenance: false,
      changes: false,
      chatbot: false,
      cart: false,
      payments: false,
      dashboard: false,
      popular: false,
      description: "Perfeito para começar"
    },
    {
      name: "Essencial",
      icon: "🍔",
      badge: "🔥",
      type: "Até 6 pág.",
      price: 800,
      monthly: 149,
      speed: "Rápida",
      domain: true,
      maintenance: true,
      changes: false,
      chatbot: false,
      cart: false,
      payments: false,
      dashboard: false,
      popular: false,
      description: "O essencial para seu negócio"
    },
    {
      name: "Premium",
      icon: "🍔🍟",
      badge: "⭐",
      type: "Até 10 pág.",
      price: 950,
      monthly: 189,
      speed: "Rápida",
      domain: true,
      maintenance: true,
      changes: true,
      chatbot: false,
      cart: false,
      payments: false,
      dashboard: false,
      popular: true,
      description: "Mais recursos e flexibilidade"
    },
    {
      name: "Max AI",
      icon: "🍔🍟🥤",
      badge: "🤖",
      type: "Ilimitado",
      price: 1200,
      monthly: 229,
      speed: "Rápida",
      domain: true,
      maintenance: true,
      changes: true,
      chatbot: true,
      cart: false,
      payments: false,
      dashboard: false,
      popular: false,
      description: "Inteligência artificial integrada"
    },
    {
      name: "Loja Digital PRO",
      icon: "🛍️",
      type: "Loja virtual completa",
      price: 1800,
      monthly: 259,
      speed: "Rápida",
      domain: true,
      maintenance: true,
      changes: true,
      chatbot: "Opcional",
      cart: true,
      payments: true,
      dashboard: true,
      popular: false,
      description: "Solução completa para e-commerce"
    }
  ];

  const features = [
    { icon: Rocket, title: "Velocidade Otimizada", description: "Sites carregam em menos de 3 segundos" },
    { icon: Globe, title: "Domínio Personalizado", description: "Sua marca com identidade única na web" },
    { icon: Settings, title: "Manutenção Incluída", description: "Suporte técnico e atualizações constantes" },
    { icon: Bot, title: "IA Integrada", description: "Chatbots inteligentes para melhor atendimento" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              CloudSphere
            </span>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">
              ✨ Criação de Sites Profissionais
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Transforme sua presença digital com a CloudSphere
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Criamos sites profissionais, rápidos e otimizados para converter visitantes em clientes. 
            Escolha o plano ideal para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8">
              Ver Planos
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-blue-200 hover:bg-blue-50">
              Portfólio
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Por que escolher a CloudSphere?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Escolha o Plano Perfeito
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comparativo completo dos nossos planos de criação de sites
            </p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : 'hover:shadow-lg'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-3xl mb-2">{plan.icon}</div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {plan.name} {plan.badge}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-blue-600">
                      R${plan.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {plan.monthly > 0 ? `+ R$${plan.monthly}/mês` : 'Sem mensalidade'}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">📄 Páginas:</span>
                      <span className="font-medium">{plan.type}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">🚀 Velocidade:</span>
                      <span className="font-medium">{plan.speed}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">🌐 Domínio:</span>
                      {plan.domain ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">🔧 Manutenção:</span>
                      {plan.maintenance ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">🔄 Alterações:</span>
                      {plan.changes ? (
                        <span className="text-green-600 text-xs">✅ Camarada</span>
                      ) : (
                        <span className="text-red-600 text-xs">❌ Valor padrão</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">🤖 Chatbot AI:</span>
                      {plan.chatbot === true ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : plan.chatbot === "Opcional" ? (
                        <span className="text-blue-600 text-xs">Opcional ($)</span>
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">🛒 Carrinho:</span>
                      {plan.cart ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">💳 Pagamentos:</span>
                      {plan.payments ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">📊 Painel:</span>
                      {plan.dashboard ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full mt-6 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                        : 'bg-gray-800 hover:bg-gray-900'
                    }`}
                  >
                    Escolher Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos criar o site perfeito para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
              Ver Portfólio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">CloudSphere</span>
          </div>
          <p className="text-gray-400 mb-4">
            Criação de sites profissionais que convertem visitantes em clientes.
          </p>
          <div className="text-sm text-gray-500">
            © 2024 CloudSphere. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
