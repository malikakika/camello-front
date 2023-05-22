import { Component } from '@angular/core';
import { ArticleService } from 'src/app/Admin/services/article/article.service';
@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css']
})
export class AdminArticlesComponent {

  articles: any[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.articleService.getArticles().subscribe({
      next: (articles: any[]) => {
        this.articles = articles;
      },
      error: (error: any) => {
        console.log('Une erreur s\'est produite lors de la récupération des pots:', error);
        // Gérez l'erreur de manière appropriée, par exemple affichez un message d'erreur à l'utilisateur
      }
    });
  }
  deleteArticle(articleId: number) {
    // Appeler le service pour supprimer l'utilisateur avec l'ID spécifié
    this.articleService.deleteArticle(articleId).subscribe(
      () => {
        // Suppression réussie, mettre à jour la liste des utilisateurs
        this.articles = this.articles.filter(article => article.id !== articleId);
      },
      (error: any) => {
        console.log('Une erreur s\'est produite lors de la suppression de l\'utilisateur:', error);
        // Gérer l'erreur de manière appropriée
      }
    );
  }
  addArticle(articleId: number) {

  }
}
