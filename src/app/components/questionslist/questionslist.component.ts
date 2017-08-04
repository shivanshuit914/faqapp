import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import {Question} from '../../models/question';

@Component({
  selector: 'app-questionslist',
  templateUrl: './questionslist.component.html',
  styleUrls: ['./questionslist.component.css']
})
export class QuestionslistComponent implements OnInit {

  questions:Question[]; 

  constructor(public dataservice:DataService) {
    
  }

  ngOnInit() {
    this.questions = this.dataservice.getQuestions();
  }

  addQuestion(question:Question) {
    this.dataservice.addQuestion(question);
  }

}
