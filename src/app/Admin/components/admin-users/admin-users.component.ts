import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Admin/services/users/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe({
      next: (users: any[]) => {
        this.users = users;
      },
      error: (error: any) => {
        console.log('Une erreur s\'est produite lors de la récupération des utilisateurs:', error);
        // Gérez l'erreur de manière appropriée, par exemple affichez un message d'erreur à l'utilisateur
      }
    });
  }
  deleteUser(userId: number) {
    // Appeler le service pour supprimer l'utilisateur avec l'ID spécifié
    this.userService.deleteUser(userId).subscribe(
      () => {
        // Suppression réussie, mettre à jour la liste des utilisateurs
        this.users = this.users.filter(user => user.id !== userId);
      },
      (error: any) => {
        console.log('Une erreur s\'est produite lors de la suppression de l\'utilisateur:', error);
        // Gérer l'erreur de manière appropriée
      }
    );
  }

}
