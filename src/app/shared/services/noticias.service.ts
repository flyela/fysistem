import { Injectable } from '@angular/core';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {
  async scrape(url: string): Promise<any> {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const data = {
        title: $('title').text(),
        // Extrae más datos según tus necesidades
      };
      return data;
    } catch (error) {
      console.error('Error scraping:', error);
      throw error;
    }
  }
}
