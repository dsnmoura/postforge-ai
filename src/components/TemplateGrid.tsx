import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Download, Eye, Palette } from "lucide-react";

// Mock template data
const templates = [
  {
    id: 1,
    title: "Motivational Quote",
    category: "Instagram",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    premium: false,
    likes: 245,
  },
  {
    id: 2,
    title: "Product Showcase",
    category: "Facebook",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    premium: true,
    likes: 189,
  },
  {
    id: 3,
    title: "Team Announcement",
    category: "LinkedIn",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
    premium: false,
    likes: 156,
  },
  {
    id: 4,
    title: "Sale Promotion",
    category: "Instagram Story",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400&h=400&fit=crop",
    premium: true,
    likes: 324,
  },
  {
    id: 5,
    title: "Event Announcement",
    category: "Twitter",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
    premium: false,
    likes: 198,
  },
  {
    id: 6,
    title: "Behind the Scenes",
    category: "Instagram",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop",
    premium: false,
    likes: 267,
  },
];

const categories = ["Todos", "Instagram", "Facebook", "LinkedIn", "Twitter", "Instagram Story"];

const TemplateGrid = () => {
  return (
    <section id="templates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Templates Profissionais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha entre centenas de templates criados por designers para cada tipo de rede social
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "ghost"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm">
              <div className="relative">
                {/* Template Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <Button size="sm" variant="secondary" className="bg-background/80 backdrop-blur">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="gradient">
                      <Palette className="w-4 h-4 mr-2" />
                      Personalizar
                    </Button>
                  </div>
                </div>

                {/* Premium Badge */}
                {template.premium && (
                  <Badge className="absolute top-3 right-3 gradient-accent text-white border-0">
                    PRO
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{template.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {template.category}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{template.likes}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Carregar Mais Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateGrid;