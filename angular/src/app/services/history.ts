import { Injectable } from '@angular/core';
import { History } from '../dto/dtos';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: History[] = [];

  constructor() { }

  pushToHistory(timestamp: string, type: string, query: string){
    this.history.push({timestamp, type, query});
  }

  getHistory(){
    return this.history.slice();
  }

}
