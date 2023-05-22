import { Component } from '@angular/core';
import { OrderService } from 'src/app/Admin/services/order/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {

  orders: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.orderService.getOrders().subscribe({
      next: (orders: any[]) => {
        this.orders = orders;
      },
      error: (error: any) => {
        console.log('Une erreur s\'est produite lors de la récupération des pots:', error);
        // Gérez l'erreur de manière appropriée, par exemple affichez un message d'erreur à l'utilisateur
      }
    });
  }
  deleteOrder(orderId: number) {
    // Appeler le service pour supprimer l'utilisateur avec l'ID spécifié
    this.orderService.deleteOrder(orderId).subscribe(
      () => {
        // Suppression réussie, mettre à jour la liste des utilisateurs
        this.orders = this.orders.filter(order => order.id !== orderId);
      },
      (error: any) => {
        console.log('Une erreur s\'est produite lors de la suppression de l\'utilisateur:', error);
        // Gérer l'erreur de manière appropriée
      }
    );
  }

}

