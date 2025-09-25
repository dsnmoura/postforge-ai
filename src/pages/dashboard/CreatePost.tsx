import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Heart, 
  TrendingUp, 
  Gift, 
  Star, 
  Users,
  Target,
  Megaphone
} from "lucide-react";

const CreatePost = () => {
  const [selectedObjective, setSelectedObjective] = useState<string>("");
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");

  const objectives = [
    { id: "promocao", name: "Promoção", icon: Gift, color: "bg-red-500" },
    { id: "dica", name: "Dica/Tutorial", icon: Heart, color: "bg-blue-500" },
    { id: "novidade", name: "Novidade", icon: TrendingUp, color: "bg-green-500" },
    { id: "depoimento", name: "Depoimento", icon: Star, color: "bg-yellow-500" },
    { id: "engajamento", name: "Engajamento", icon: Users, color: "bg-purple-500" },
    { id: "branding", name: "Branding", icon: Target, color: "bg-pink-500" },
    { id: "anuncio", name: "Anúncio", icon: Megaphone, color: "bg-orange-500" },
  ];

  const networks = [
    { id: "instagram", name: "Instagram", icon: Instagram, formats: ["Post", "Stories", "Reels"] },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, formats: ["Post", "Artigo", "Carrossel"] },
    { id: "tiktok", name: "TikTok", icon: MessageCircle, formats: ["Vídeo", "Stories"] },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Criar Post</h1>
        <p className="text-muted-foreground">
          Crie conteúdo impactante para suas redes sociais
        </p>
      </div>

      {/* Seleção do Objetivo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Qual é o objetivo do seu post?
          </CardTitle>
          <CardDescription>
            Escolha o tipo de conteúdo que melhor representa sua mensagem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {objectives.map((objective) => (
              <div
                key={objective.id}
                onClick={() => setSelectedObjective(objective.id)}
                className={`
                  p-4 rounded-lg border cursor-pointer transition-smooth hover:scale-105
                  ${selectedObjective === objective.id 
                    ? 'border-primary bg-primary/10 shadow-card' 
                    : 'border-border hover:border-primary/50'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className={`p-2 rounded-full ${objective.color} text-white`}>
                    <objective.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{objective.name}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Seleção da Rede Social */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Para qual rede social?
          </CardTitle>
          <CardDescription>
            Selecione a plataforma onde você irá publicar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {networks.map((network) => (
              <div
                key={network.id}
                onClick={() => setSelectedNetwork(network.id)}
                className={`
                  p-6 rounded-lg border cursor-pointer transition-smooth hover:scale-102
                  ${selectedNetwork === network.id 
                    ? 'border-primary bg-primary/10 shadow-card' 
                    : 'border-border hover:border-primary/50'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <network.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">{network.name}</h3>
                    <div className="flex flex-wrap gap-1 mt-2 justify-center">
                      {network.formats.map((format) => (
                        <Badge key={format} variant="secondary" className="text-xs">
                          {format}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Botão de Próximo Passo */}
      {selectedObjective && selectedNetwork && (
        <div className="flex justify-center">
          <Button size="lg" className="px-8">
            Continuar com {objectives.find(o => o.id === selectedObjective)?.name} para {networks.find(n => n.id === selectedNetwork)?.name}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CreatePost;