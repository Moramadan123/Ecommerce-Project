import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  id!: any;
  data: any = {};
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit(): void {
    this.getproduct();
  }
  getproduct() {
    this.loading = true;
    this.service.getproductbyid(this.id).subscribe(
      (res) => {
        this.loading = false;
        this.data = res;
      },
      (error) => {
        alert('error');
      }
    );
  }
}
