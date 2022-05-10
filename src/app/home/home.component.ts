import {Component, Inject, OnInit} from '@angular/core';
import {Categorie} from '../model/categorie';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategorieService} from "../service/categorie.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddCategorieComponent} from "../categorie/add-categorie/add-categorie.component";
import {Article} from "../model/article";
import {ArticleService} from "../service/article.service";
import {AddArticleComponent} from "../article/add-article/add-article.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categorie: Categorie;
  control: FormControl = new FormControl('');
  article: Article;
  control1: FormControl = new FormControl('');

  constructor(public crudApi: CategorieService , public toastr: ToastrService,
              public crudApi1: ArticleService, public toastr1: ToastrService,
              private router: Router, public fb: FormBuilder,
              private matDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef1: MatDialogRef<AddArticleComponent>,
              public dialogRef: MatDialogRef<AddCategorieComponent>, ) {
  }

  ngOnInit(): void {
    this.getData();
  }


  getData() {

    this.crudApi.getAll().subscribe(
      response => {
        this.crudApi.listData = response;

        this.crudApi1.getAll().subscribe(
          response1 => {
            this.crudApi1.listData = response1;
          });
      }

    );



  }
}
