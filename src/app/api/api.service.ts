import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CompetitionsDTO } from './models/competitionsDTO';
import { CompetitionsDetailDTO } from './models/competitionsDetailDTO';
import { CompetitionTeamsDTO } from './models/competitionTeamsDTO';
import { CompetitionMatchesDTO } from './models/competitionMatchesDTO';
import { TeamMatchesDTO } from './models/teamMatchesDTO';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders().set('X-Auth-Token', environment.apiToken)

  constructor(private httpClient: HttpClient) { }

  competitionList(): Observable<CompetitionsDTO> {
    return this.httpClient.get<CompetitionsDTO>(environment.apiServer + 'competitions/', {headers: this.headers});
  }

  competitionDetail(id: number): Observable<CompetitionsDetailDTO> {
    return this.httpClient.get<CompetitionsDetailDTO>(environment.apiServer + `competitions/${id}`, {headers: this.headers});
  }

  competitionTeams(id: number): Observable<CompetitionTeamsDTO> {
    return this.httpClient.get<CompetitionTeamsDTO>(environment.apiServer + `competitions/${id}/teams`, {headers: this.headers});
  }

  competitionMatch(id: number): Observable<CompetitionMatchesDTO> {
    return this.httpClient.get<CompetitionMatchesDTO>(environment.apiServer + `competitions/${id}/matches/`, {headers: this.headers});
  }

  teamMatches(id: number): Observable<TeamMatchesDTO>{
    return this.httpClient.get<TeamMatchesDTO>(environment.apiServer + `teams/${id}/matches/`, {headers: this.headers});
  }
}
