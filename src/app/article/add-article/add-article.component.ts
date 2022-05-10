import { Component, OnInit,Inject } from '@angular/core';
import { ScategorieService} from '../../service/scategorie.service';
import { CategorieService} from '../../service/categorie.service';
import { ArticleService} from '../../service/article.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router } from '@angular/router';
import { Article} from '../../model/article';
import { Categorie} from '../../model/categorie';
import { Scategorie} from '../../model/scategorie';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  CategorieList: Categorie[];
  categorie : any;
  ScategorieList: Scategorie[];
  scategorie : any = {};
  wcode : string = '';
  userFile ;
  public imagePath;
  imgURL: any;
  public message: string;
  constructor(public crudApi: ArticleService ,public fb: FormBuilder,public toastr: ToastrService,
    public scategorieService: ScategorieService,
    public categorieService: CategorieService,
    private router : Router,@Inject(MAT_DIALOG_DATA)  public data,
    public dialogRef:MatDialogRef<AddArticleComponent>,

    ) { }
    get f() { return this.crudApi.dataForm.controls; }
  ngOnInit() {
   if (this.crudApi.choixmenu == 'A')
    {this.infoForm()};
    this.categorieService.getAll().subscribe(
      response =>{this.CategorieList = response;}
     );
   }

  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: null,
        code: ['', [Validators.required]],
        code_b: ['', [Validators.required]],
        libelle: ['', [Validators.required]],
        pa: [0, [Validators.required]],
        pv: [0, [Validators.required]],
        tva: [0, [Validators.required]],
        fodec: [0, [Validators.required]],
        stkinit: [0, [Validators.required]],
        code_categ: ['', [Validators.required]],
        code_scateg: ['', [Validators.required]],
        profile : [],
      });
    }

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
    if (this.crudApi.choixmenu == 'A')
    {
      this.addData();
    }
    else
    {
    this.updateData()
    }
}

onSelectCateg(event: any)
{
  this.categorieService.getData(event).subscribe(
    response => {this.categorie = response;}
   );
}

onSelectScateg(id_scateg: string)
{
 this.scategorieService.getData(id_scateg).subscribe(
    response =>{
      this.scategorie = response;
      }
   );
}

addData() {
  const formData = new  FormData();
  const article = this.crudApi.dataForm.value;
  formData.append('article',JSON.stringify(article));
  formData.append('file',this.userFile);
  this.crudApi.createData(formData).subscribe( data => {

    this.router.navigate(['/larticle']);
  });
}
  updateData()
  {
    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
    subscribe( data => {
      this.dialogRef.close();
      this.router.navigate(['/larticle']);
    });
  }

  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();

    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


    }


  }




