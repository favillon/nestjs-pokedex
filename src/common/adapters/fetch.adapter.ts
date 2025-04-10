import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class FetchAdapter implements HttpAdapter {
   
    private fetch: any;

    async get<T>(url: string): Promise<T> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Fetch error: ${response.statusText}`);
            }
            const data: T = await response.json();
            return data;
        } catch (error) {            
            throw new Error('This is an error - Check logs');
        }
    }
}