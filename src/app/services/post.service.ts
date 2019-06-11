import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    {
      title: '1er post',
      content: 'Post quorum necem nihilo lenius ferociens Gallus ut leo cadaveribus pastus multa huius modi scrutabatur. quae singula narrare non refert, me professione modum, quod evitandum est, excedamus.',
      loveIts: 1,
      createdAt: new Date()
    },
    {
      title: '2eme post',
      content: 'Nunc vero inanes flatus quorundam vile esse quicquid extra urbis pomerium nascitur aestimant praeter orbos et caelibes, nec credi potest qua obsequiorum diversitate coluntur homines sine liberis Romae.',
      loveIts: -1,
      createdAt: new Date()
    },
    {
      title: '3eme post',
      content: 'Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.',
      loveIts: 0,
      createdAt: new Date()
    }
  ];

  postSubject = new Subject<Post[]>();

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPostSubject();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.findIndexPost(post);
    this.posts.splice(postIndexToRemove, 1);
    this.emitPostSubject();
  }

  increaseLoveItsOnOne(post: Post) {
    const indexPost = this.findIndexPost(post);
    this.posts[indexPost].loveIts++;
    this.emitPostSubject();
  }

  decreaseLoveItsOnOne(post: Post) {
    const indexPost = this.findIndexPost(post);
    this.posts[indexPost].loveIts--;
    this.emitPostSubject();
  }

  private findIndexPost(post: Post) {
    return this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
  }

}
