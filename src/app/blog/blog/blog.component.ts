import {Component, OnInit, Input } from '@angular/core';
import {Blog} from '../../shared';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})

export class BlogComponent implements OnInit {
  blogs: Array<Blog>;
  @Input() unselected = true;

  constructor(private blogService: BlogService) {};

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

  onClicked() {
    this.unselected = false;
  }
}
