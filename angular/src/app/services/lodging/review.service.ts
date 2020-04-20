import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from 'src/app/data/lodging/review.model';
import { Config } from './config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient, private config: Config) {}

  /**
   * Returns all the reviews from lodging api.
   *
   * @returns Observable array of reviews
   */
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.config.review.getReviewUrl);
  }

  /**
   * Sends review to lodging api to be added.
   *
   * @returns review that was added
   */
  postReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.config.review.postReviewUrl, review);
  }

  /**
   * Sends Review to lodging api to be updated.
   *
   * @returns hotel that was updated
   */
  putReview(review: Review): Observable<Review> {
    return this.http.put<Review>(this.config.review.putReviewUrl, review);
  }

  /**
   * Delete review from lodging api.
   *
   * @returns review that was deleted
   */
  deleteReview(id: number): Observable<Review> {
    const url = `${this.config.review.deleteReviewUrl}/${id}`;

    return this.http.delete<Review>(url);
  }
}
