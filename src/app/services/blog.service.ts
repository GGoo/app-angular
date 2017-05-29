import {Injectable} from '@angular/core';
import {Blog} from '../shared';
import {Post} from '../shared';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class BlogService {

  // do zmiany
  private baseUrl: string = 'http://137.74.116.6/rest/blogs';

  blog: Blog;
  blogs: Blog[];
  posts: Post[];

  constructor(private http: Http) { }

  getBlogs() {
    const blogsFromServer = [];
    this.http.get(`${this.baseUrl}`)
      .map(
        (response: Response) => {
          return response.json();
        }
      ).subscribe(
      (data) => {
        for (let key in data)
          blogsFromServer.push(data[key]);
      }
    );
    this.blogs = blogsFromServer;
    return blogsFromServer;
  }

  getBlog(id: number) {
    return this.blogs[id];
  }

  getPosts() {
    const postsByBlog = [];
    this.http.get(`${this.baseUrl}/` + this.blog.id + `/posts`)
      .map(
        (response: Response) => {
          return response.json();
        }
      ).subscribe(
      (data) => {
        for (let key in data)
          postsByBlog.push(data[key]);
      }
    );
    this.posts = postsByBlog;
    return postsByBlog;
  }
}

