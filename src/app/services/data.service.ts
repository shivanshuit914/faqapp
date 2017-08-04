import { Injectable } from '@angular/core';
import {Question} from '../models/question';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() { 
  }

  getQuestions() {
    this.questions = [];
    if (localStorage.getItem('questions') != null) {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  addQuestion(question:Question) {
    let questions = [];
    if (localStorage.getItem('questions') != null) {
      questions = JSON.parse(localStorage.getItem('questions'));
    }
    questions.unshift(question);
    localStorage.setItem('questions', JSON.stringify(questions));

    this.questions.unshift(question);
  }

  removeQuestion(question:Question) {
    for(let i=0;i<this.questions.length;i++) {
      if(question == this.questions[i]) {
        this.questions.splice(i, 1);
      }
    }

    localStorage.setItem('questions', JSON.stringify(this.questions));
  }
}
