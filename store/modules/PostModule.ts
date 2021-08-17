/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Post } from '~/interfaces/dtos/post.dto';
import { $axios } from '~/utils/api';
import HttpUtils from '~/utils/http';


@Module({
  name: 'modules/PostModule',
  namespaced: true,
  stateFactory: true,
})
export default class PostModule extends VuexModule {
 postList: Array<Post> = [
   {title: 'a', description:'des1'},
   {title: 'b', description:'des2'},
   {title: 'c', description:'des3'},
   {title: 'd', description:'des4'},
 ];

 slug!: string;

  @Mutation
  public setPostList(val: any) {
    this.postList = val
  }

  @Mutation
  public setSlug(val: any) {
    this.slug = val
  }


  public get getPostList(): Array<Post> {
    console.log('this is Post module:',this.postList);

    // this._httpUtil.doGet('localhost:3000/api/get');
    return this.postList;
  }

  @Mutation
  public getAll(data: any) {
    console.log('data:',data);

    // this._httpUtil.doGet('localhost:3000/api/get');
  }

  @Action({ commit: 'getAll' })
  public getAllAction(slug: string): Promise<any>{
    // console.log('this is counter.ts');
    // this.setSlug(slug);

    return HttpUtils.doGet(slug)
  }

}
