import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  
  @Client({
    transport: Transport.TCP,
  })
  client: ClientProxy;
  
  getHello(): string {
    return 'Hello World!';
  }

  example(): Observable<String> {
    const pattern = { cmd: 'sum' };
    const payload = ['web', 'applications'];
    return this.client.send<String>(pattern, payload);
  }
}
