import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Randeep Hooda',nickName:"Randeep",url:"https://pbs.twimg.com/profile_images/1277973190220767232/Qhx1m6qs_400x400.jpg" },
      { id: 12, name: 'Arjun Rampal',nickName:"Arjun",url:"https://www.filmcompanion.in/wp-content/uploads/2017/09/arjun-rampal-interview-film-companion-feature-29.jpeg" },
      { id: 13, name: 'Sylvester Stallone',nickName:"Rocky",url:"https://sm.ign.com/t/ign_it/blogroll/r/rambo-new-/rambo-new-blood-tv-series-in-development-at-fox_fgu5.2560.jpg" },
      { id: 14, name: 'Danial Drag',nickName:"James Bond" ,url:"https://pmcvariety.files.wordpress.com/2019/12/b25_25594_r-e1575469208183.jpg?w=681&h=383&crop=1"},
      { id: 15, name: 'Irfan Khan',nickName:"Ranvijay",url:"https://s01.sgp1.cdn.digitaloceanspaces.com/article/133654-lwoaaihvpg-1577542502.jpg" },
      { id: 16, name: 'Imran Hasmi',nickName:"Arjun",url:"http://www.yusrablog.com/actors/imran-hashmi-25-latest-pictures-collection/attachment/emran-hashmi-indian-actor/" },
      { id: 17, name: 'Priyanka Chopra',nickName:"merry kom",url:"https://www.geo.tv/assets/uploads/updates/2020-09-03/305919_2343124_updates.jpg" },
      { id: 18, name: 'Sharukh khan',nickName:"Kabir Khan" ,url:"https://images.outlookindia.com/public/uploads/articles/2020/2/6/Shahrukh_Khan_570_850.jpg"},
      { id: 19, name: 'Amir Khan',nickName:"RJ" ,url:"https://gumlet.assettype.com/nationalherald%2F2020-05%2F3accc8c2-4c78-4ae6-a387-b0588272a973%2FAamir_Khan.jpg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&format=webp&w=750&dpr=1.5"},
      { id: 20, name: 'Amitabh Bachann',nickName:"Vijay" ,url:"https://s01.sgp1.digitaloceanspaces.com/large/853677-70527-jmxjmwlevh-1507480566.jpg"}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
