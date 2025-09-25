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
  Megaphone,
  Image,
  Video,
  FileText,
  LayoutGrid,
  Play,
  Camera
} from "lucide-react";

const CreatePost = () => {
  const [selectedObjective, setSelectedObjective] = useState<string>("");
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");

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

  const templates = {
    instagram: [
      { 
        id: "ig-feed-quadrado", 
        name: "Post Quadrado", 
        icon: Image, 
        description: "Formato 1:1 ideal para feed", 
        size: "1080x1080",
        category: "Feed"
      },
      { 
        id: "ig-stories", 
        name: "Stories", 
        icon: Camera, 
        description: "Formato vertical para stories", 
        size: "1080x1920",
        category: "Stories"
      },
      { 
        id: "ig-carrossel", 
        name: "Carrossel", 
        icon: LayoutGrid, 
        description: "Múltiplas imagens deslizáveis", 
        size: "1080x1080",
        category: "Feed"
      },
      { 
        id: "ig-reels", 
        name: "Reels", 
        icon: Play, 
        description: "Vídeo vertical curto", 
        size: "1080x1920",
        category: "Reels"
      }
    ],
    linkedin: [
      { 
        id: "li-post", 
        name: "Post Simples", 
        icon: FileText, 
        description: "Post com texto e imagem", 
        size: "1200x627",
        category: "Post"
      },
      { 
        id: "li-carrossel", 
        name: "Carrossel LinkedIn", 
        icon: LayoutGrid, 
        description: "Apresentação em slides", 
        size: "1080x1080",
        category: "Post"
      },
      { 
        id: "li-artigo", 
        name: "Artigo", 
        icon: FileText, 
        description: "Formato de artigo longo", 
        size: "1200x627",
        category: "Artigo"
      },
      { 
        id: "li-infografico", 
        name: "Infográfico", 
        icon: LayoutGrid, 
        description: "Visual informativo", 
        size: "1080x1350",
        category: "Post"
      }
    ],
    tiktok: [
      { 
        id: "tt-video", 
        name: "Vídeo Vertical", 
        icon: Video, 
        description: "Vídeo para TikTok", 
        size: "1080x1920",
        category: "Vídeo"
      },
      { 
        id: "tt-stories", 
        name: "TikTok Stories", 
        icon: Camera, 
        description: "Stories do TikTok", 
        size: "1080x1920",
        category: "Stories"
      },
      { 
        id: "tt-trend", 
        name: "Trend Template", 
        icon: TrendingUp, 
        description: "Template baseado em trends", 
        size: "1080x1920",
        category: "Vídeo"
      }
    ]
  };

  const getTemplatesForNetwork = (networkId: string) => {
    return templates[networkId as keyof typeof templates] || [];
  };

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

      {/* Seleção de Template */}
      {selectedObjective && selectedNetwork && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LayoutGrid className="h-5 w-5" />
              Escolha seu template
            </CardTitle>
            <CardDescription>
              Templates otimizados para {networks.find(n => n.id === selectedNetwork)?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTemplatesForNetwork(selectedNetwork).map((template) => (
                <div
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`
                    group p-6 rounded-lg border cursor-pointer transition-smooth hover:scale-102
                    ${selectedTemplate === template.id 
                      ? 'border-primary bg-primary/10 shadow-card' 
                      : 'border-border hover:border-primary/50'
                    }
                  `}
                >
                  <div className="space-y-4">
                    {/* Preview do Template */}
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <template.icon className="h-12 w-12 text-primary/60" />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="absolute top-2 right-2 text-xs"
                      >
                        {template.category}
                      </Badge>
                    </div>
                    
                    {/* Informações do Template */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-mono">
                          {template.size}px
                        </span>
                        {selectedTemplate === template.id && (
                          <Badge variant="default" className="text-xs">
                            Selecionado
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Botão de Próximo Passo */}
      {selectedObjective && selectedNetwork && selectedTemplate && (
        <div className="flex justify-center animate-fade-in">
          <Button size="lg" className="px-8">
            Criar Post com {getTemplatesForNetwork(selectedNetwork).find(t => t.id === selectedTemplate)?.name}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CreatePost;