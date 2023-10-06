import { Injectable } from '@angular/core';
import { KeyPair } from 'src/app/domain/key-pair';
import * as forge from 'node-forge';

@Injectable({
    providedIn: 'root'
})
export class CryptoService {
  
    constructor() {}

    encrypt(data:any, keyPair:KeyPair) {
        let encryptedData:any = {};
        
        Object.entries(data).forEach(([key, value]) => {
            if(keyPair.publicKey){
                encryptedData[key] = this.encode(value, keyPair.publicKey);
            }
        })
        return encryptedData;
    }

    private encode(value: any, publicKey:string) {
        const publicKeyDer = forge.util.decode64(publicKey);
        const publicKeyAns = forge.pki.publicKeyFromAsn1(forge.asn1.fromDer(publicKeyDer));

        const encrypted = publicKeyAns.encrypt(value);

        return forge.util.encode64(encrypted);
    }

}