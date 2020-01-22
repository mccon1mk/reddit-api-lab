import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.css']
})
export class RedditFeedComponent {

  constructor(private apiService: ApiService) { }
  data = this.apiService.fetchAwwSubreddit().subscribe((data) => this.data = { ...data });

}
