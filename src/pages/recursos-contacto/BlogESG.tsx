import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, User, Clock, ArrowRight, Search, Filter, Tag } from "lucide-react";

const BlogESG = () => {
  const featuredPosts = [
    {
      title: "Guía Completa NIS 2025: Todo lo que Necesitas Saber",
      excerpt: "Análisis detallado de las nuevas regulaciones mexicanas y cómo preparar tu empresa para el cumplimiento.",
      author: "Dr. María González",
      date: "15 Dic 2024",
      readTime: "8 min",
      category: "Regulaciones",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      title: "ROI del ESG: Cómo Medir el Impacto Financiero",
      excerpt: "Metodologías prácticas para calcular el retorno de inversión de tus iniciativas de sostenibilidad.",
      author: "Ing. Carlos Ruiz",
      date: "12 Dic 2024",
      readTime: "6 min",
      category: "Finanzas",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Casos de Éxito: Empresas Mexicanas Líderes en ESG",
      excerpt: "Historias inspiradoras de compañías que han transformado su negocio con estrategias ESG efectivas.",
      author: "Lic. Ana Martínez",
      date: "10 Dic 2024",
      readTime: "10 min",
      category: "Casos de Éxito",
      image: "/api/placeholder/400/250"
    }
  ];

  const recentPosts = [
    {
      title: "Tendencias ESG 2025: Lo que Viene",
      excerpt: "Predicciones y tendencias clave que marcarán el futuro de la sostenibilidad empresarial.",
      author: "Dr. Luis Hernández",
      date: "8 Dic 2024",
      readTime: "5 min",
      category: "Tendencias"
    },
    {
      title: "Implementación de Reportes GRI: Paso a Paso",
      excerpt: "Guía práctica para implementar el estándar GRI en tu organización.",
      author: "Mtra. Sofia López",
      date: "5 Dic 2024",
      readTime: "7 min",
      category: "Reportes"
    },
    {
      title: "ESG en PyMEs: Estrategias Accesibles",
      excerpt: "Cómo las pequeñas y medianas empresas pueden adoptar prácticas ESG sin grandes inversiones.",
      author: "Lic. Roberto Díaz",
      date: "3 Dic 2024",
      readTime: "6 min",
      category: "PyMEs"
    },
    {
      title: "Auditorías de Sostenibilidad: Qué Esperar",
      excerpt: "Preparación y proceso de las auditorías ESG para maximizar los resultados.",
      author: "Ing. Patricia Morales",
      date: "1 Dic 2024",
      readTime: "8 min",
      category: "Auditorías"
    }
  ];

  const categories = [
    { name: "Regulaciones", count: 15, color: "bg-red-100 text-red-800" },
    { name: "Finanzas", count: 12, color: "bg-green-100 text-green-800" },
    { name: "Casos de Éxito", count: 8, color: "bg-blue-100 text-blue-800" },
    { name: "Tendencias", count: 10, color: "bg-purple-100 text-purple-800" },
    { name: "Reportes", count: 14, color: "bg-yellow-100 text-yellow-800" },
    { name: "PyMEs", count: 6, color: "bg-pink-100 text-pink-800" },
    { name: "Auditorías", count: 9, color: "bg-indigo-100 text-indigo-800" }
  ];

  const popularTags = [
    "NIS 2025", "GRI", "Sostenibilidad", "Compliance", "ROI ESG", 
    "Auditoría", "Reportes", "PyMEs", "Certificación", "Regulaciones"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <BookOpen className="h-4 w-4 mr-2" />
              Conocimiento ESG
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog <span className="text-primary">ESG</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Insights, tendencias y guías prácticas para liderar la sostenibilidad empresarial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-navy"
                />
              </div>
              <Button size="lg" variant="outline" className="bg-white text-navy hover:bg-gray-50">
                <Filter className="h-5 w-5 mr-2" />
                Filtrar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Artículo Destacado</h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-primary/20 shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPosts[0].image} 
                    alt={featuredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                    {featuredPosts[0].category}
                  </Badge>
                  <h3 className="text-3xl font-bold text-navy mb-4">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-gray-text mb-6 text-lg">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-text">{featuredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-text">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPosts[0].date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPosts[0].readTime}
                      </div>
                    </div>
                  </div>
                  <Button size="lg" variant="cta">
                    Leer Artículo
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Artículos Recientes</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Las últimas publicaciones sobre ESG, sostenibilidad y compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {featuredPosts.slice(1).map((post, index) => (
              <Card key={index} className="border-gray-light hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/30 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-text mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-text mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                      <Clock className="h-3 w-3 ml-2" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Leer Más
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recentPosts.map((post, index) => (
              <Card key={index} className="border-gray-light hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-gray-100 text-gray-800 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-text mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-text">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                      <Clock className="h-3 w-3 ml-2" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            
            {/* Categories */}
            <Card className="border-gray-light">
              <CardHeader>
                <CardTitle className="text-xl text-navy">Categorías</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <span className="text-navy font-medium">{category.name}</span>
                    <Badge className={`${category.color} text-xs`}>
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="border-gray-light">
              <CardHeader>
                <CardTitle className="text-xl text-navy">Tags Populares</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl text-navy">Newsletter ESG</CardTitle>
                <CardDescription>
                  Recibe los mejores insights directamente en tu email
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="w-full" variant="cta">
                  Suscribirse
                </Button>
                <p className="text-xs text-gray-text text-center">
                  Enviamos contenido semanal. Sin spam.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              ¿Quieres Contribuir al Blog?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Comparte tu experiencia y conocimiento con la comunidad ESG
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <BookOpen className="h-5 w-5 mr-2" />
                Proponer Artículo
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                Contactar Editor
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogESG;
