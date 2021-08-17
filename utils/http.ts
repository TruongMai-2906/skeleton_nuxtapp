/* eslint-disable no-useless-constructor */

import { $axios } from "./api";

/* eslint-disable @typescript-eslint/no-unused-vars */
export default class HttpUtils {
  static data1: string = 'data1'

  public static  doGet(requestUrl: string): Promise<any>{

     return $axios.$get(requestUrl)
  }

  public doPost(requestUrl: string, paramBody: any){

    return $axios.$post(requestUrl,paramBody);
  }

  public doPut(requestUrl: string, paramBody: any){

    return $axios.$put(requestUrl,paramBody);
  }

  public doDelete(requestUrl: string, paramBody: any){

    return $axios.$delete(requestUrl,paramBody);
  }

  public doPatch(requestUrl: string, paramBody: any){

    return $axios.$patch(requestUrl,paramBody);
  }
}
