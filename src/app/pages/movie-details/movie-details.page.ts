import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  item = null;


  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() { 
   let id= this.activatedRoute.snapshot.paramMap.get('id');

   this.movieService.getDetails(id).subscribe(result => { 
     console.log('details: ', result); 
     this.item = result;

   });
  }


  openWebsite(){ 
    window.open(this.item.Website, '_blank');
  }
}
