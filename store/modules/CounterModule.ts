/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Environment } from '~/environments/environment';
import { $axios } from '~/utils/api';
import HttpUtils from '~/utils/http';


@Module({
  name: 'modules/CounterModule',
  namespaced: true,
  stateFactory: true,
})
export default class CounterModule extends VuexModule {
  test: string = 'initial'

  @Mutation
  public setTest(val: string) {
    this.test = val
  }


  public get getTest(): string {
    console.log('this is Counter module:',this.test);

    // this._httpUtil.doGet('localhost:3000/api/get');
    return this.test;
  }

  @Mutation
  public getAll(data: any) {
    console.log('data:',data);

    // this._httpUtil.doGet('localhost:3000/api/get');
  }

  @Action({ commit: 'getAll' })
  public getAllAction(slug: string): Promise<any>{
    // console.log('this is counter.ts');
    this.setTest(slug);
    console.log('environment:', Environment.endpoint.systemEndpoint.careerEndpoint);

    console.log('this is counter.ts:',this.test);
    return HttpUtils.doGet(slug)
  }
}
