'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/access/signin');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
              .state('app.home', {
                  url: '/home',
                  templateUrl: 'tpl/app_home.html'
              })
              // resource
              .state('app.resource', {
                  url: '/resource',
                  template: '<div ui-view class="fade-in-up"></div>'
              })
              .state('app.resource.center', {
                  url: '/center',
                  templateUrl: 'tpl/resource_center.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/resourceCenter.js',
                                      'vendor/modules/ui-select2/select2.min.js',
                                      'vendor/modules/ui-select2/select2.min.css',
                                      'vendor/jquery/laydate/laydate.js',
                                      'vendor/jquery/bootstrap.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.resource.follow', {
                  url: '/follow',
                  templateUrl: 'tpl/resource_follow.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/resourceFollow.js',
                                      'vendor/modules/ui-select2/select2.min.js',
                                      'vendor/modules/ui-select2/select2.min.css',
                                      'vendor/jquery/laydate/laydate.js',
                                      'vendor/jquery/bootstrap.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.resource.invalid', {
                  url: '/invalid',
                  templateUrl: 'tpl/resource_invalid.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/resourceInvalid.js',
                                      'vendor/modules/ui-select2/select2.min.js',
                                      'vendor/modules/ui-select2/select2.min.css',
                                      'vendor/jquery/laydate/laydate.js',
                                      'vendor/jquery/bootstrap.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.resource.customer', {
                  url: '/customer',
                  templateUrl: 'tpl/resource_customer.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/resourceCustomer.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.resource.cfollow', {
                  url: '/cfollow',
                  templateUrl: 'tpl/resource_cfollow.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/resourceCfollow.js',
                                      'vendor/jquery/laydate/laydate.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.resource.undistributed', {
                  url: '/undistributed',
                  templateUrl: 'tpl/resource_undistributed.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/resourceUndistributed.js',
                                      'vendor/modules/ui-select2/select2.min.js',
                                      'vendor/modules/ui-select2/select2.min.css',
                                      'vendor/jquery/laydate/laydate.js',
                                      'vendor/jquery/bootstrap.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              // intent
              .state('app.intent', {
                  url: '/intent',
                  template: '<div ui-view class="fade-in-up"></div>'
              })
              .state('app.intent.center', {
                  url: '/center',
                  templateUrl: 'tpl/intent_center.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/intentCenter.js',
                                      'vendor/modules/ui-select2/select2.min.js',
                                      'vendor/modules/ui-select2/select2.min.css',
                                      'vendor/jquery/laydate/laydate.js',
                                      'vendor/jquery/bootstrap.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.intent.follow', {
                  url: '/follow',
                  templateUrl: 'tpl/intent_follow.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/intentFollow.js',
                                      'vendor/modules/ui-select2/select2.min.js',
                                      'vendor/modules/ui-select2/select2.min.css',
                                      'vendor/jquery/laydate/laydate.js',
                                      'vendor/jquery/bootstrap.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.intent.invalid', {
                  url: '/invalid',
                  templateUrl: 'tpl/intent_invalid.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/intentInvalid.js',
                                      'vendor/modules/ui-select2/select2.min.js',
                                      'vendor/modules/ui-select2/select2.min.css',
                                      'vendor/jquery/laydate/laydate.js',
                                      'vendor/jquery/bootstrap.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.intent.undistributed', {
                  url: '/undistributed',
                  templateUrl: 'tpl/intent_undistributed.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/intentUndistributed.js',
                                      'vendor/modules/ui-select2/select2.min.js',
                                      'vendor/modules/ui-select2/select2.min.css',
                                      'vendor/jquery/laydate/laydate.js',
                                      'vendor/jquery/bootstrap.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.intent.customer', {
                  url: '/customer',
                  templateUrl: 'tpl/intent_customer.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/intentCustomer.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.intent.cfollow', {
                  url: '/cfollow',
                  templateUrl: 'tpl/intent_cfollow.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/intentCfollow.js',
                                      'vendor/jquery/laydate/laydate.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              // visit
              .state('app.visit', {
                  url: '/visit',
                  template: '<div ui-view class="fade-in-up"></div>'
              })
              // .state('app.visit.center', {
              //     url: '/center',
              //     templateUrl: 'tpl/visit_center.html',
              //     resolve: {
              //         deps: ['$ocLazyLoad', 'uiLoad',
              //             function( $ocLazyLoad, uiLoad ){
              //                 return uiLoad.load(
              //                     ['js/controllers/visitCenter.js',
              //                         'vendor/modules/ui-select2/select2.min.js',
              //                         'vendor/modules/ui-select2/select2.min.css',
              //                         'vendor/jquery/laydate/laydate.js',
              //                         'vendor/jquery/bootstrap.js']
              //                 ).then(
              //                     function(){
              //                         return $ocLazyLoad.load('toaster');
              //                     }
              //                 )
              //             }]
              //     }
              // })
              // .state('app.visit.follow', {
              //     url: '/follow',
              //     templateUrl: 'tpl/visit_follow.html',
              //     resolve: {
              //         deps: ['$ocLazyLoad', 'uiLoad',
              //             function( $ocLazyLoad, uiLoad ){
              //                 return uiLoad.load(
              //                     ['js/controllers/visitFollow.js',
              //                         'vendor/modules/ui-select2/select2.min.js',
              //                         'vendor/modules/ui-select2/select2.min.css',
              //                         'vendor/jquery/laydate/laydate.js',
              //                         'vendor/jquery/bootstrap.js']
              //                 ).then(
              //                     function(){
              //                         return $ocLazyLoad.load('toaster');
              //                     }
              //                 )
              //             }]
              //     }
              // })
              // .state('app.visit.invalid', {
              //     url: '/invalid',
              //     templateUrl: 'tpl/visit_invalid.html',
              //     resolve: {
              //         deps: ['$ocLazyLoad', 'uiLoad',
              //             function( $ocLazyLoad, uiLoad ){
              //                 return uiLoad.load(
              //                     ['js/controllers/visitInvalid.js',
              //                         'vendor/modules/ui-select2/select2.min.js',
              //                         'vendor/modules/ui-select2/select2.min.css',
              //                         'vendor/jquery/laydate/laydate.js',
              //                         'vendor/jquery/bootstrap.js']
              //                 ).then(
              //                     function(){
              //                         return $ocLazyLoad.load('toaster');
              //                     }
              //                 )
              //             }]
              //     }
              // })
              // .state('app.visit.undistributed', {
              //     url: '/undistributed',
              //     templateUrl: 'tpl/visit_undistributed.html',
              //     resolve: {
              //         deps: ['$ocLazyLoad', 'uiLoad',
              //             function( $ocLazyLoad, uiLoad ){
              //                 return uiLoad.load(
              //                     ['js/controllers/visitUndistributed.js',
              //                         'vendor/modules/ui-select2/select2.min.js',
              //                         'vendor/modules/ui-select2/select2.min.css',
              //                         'vendor/jquery/laydate/laydate.js',
              //                         'vendor/jquery/bootstrap.js']
              //                 ).then(
              //                     function(){
              //                         return $ocLazyLoad.load('toaster');
              //                     }
              //                 )
              //             }]
              //     }
              // })
              .state('app.visit.resourcePool', {
                  url: '/resourcePool',
                  templateUrl: 'tpl/visit_resourcePool.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/visitResourcePool.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              // .state('app.visit.customer', {
              //     url: '/customer',
              //     templateUrl: 'tpl/visit_customer.html',
              //     resolve: {
              //         deps: ['$ocLazyLoad', 'uiLoad',
              //             function( $ocLazyLoad, uiLoad ){
              //                 return uiLoad.load(
              //                     ['js/controllers/visitCustomer.js']
              //                 ).then(
              //                     function(){
              //                         return $ocLazyLoad.load('toaster');
              //                     }
              //                 )
              //             }]
              //     }
              // })
              // System
              .state('app.system', {
                  url: '/system',
                  template: '<div ui-view class="fade-in-down"></div>'
              })
              .state('app.system.distribute', {
                  url: '/distribute',
                  templateUrl: 'tpl/system_distribute.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/systemDistribute.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.system.source', {
                  url: '/source',
                  templateUrl: 'tpl/system_source.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/systemSource.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              .state('app.system.filter', {
                  url: '/filter',
                  templateUrl: 'tpl/system_filter.html',
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                          function( $ocLazyLoad, uiLoad ){
                              return uiLoad.load(
                                  ['js/controllers/systemFilter.js']
                              ).then(
                                  function(){
                                      return $ocLazyLoad.load('toaster');
                                  }
                              )
                          }]
                  }
              })
              // pages
              .state('app.page', {
                  url: '/page',
                  template: '<div ui-view class="fade-in-down"></div>'
              })
              .state('app.page.profile', {
                  url: '/profile',
                  templateUrl: 'tpl/page_profile.html'
              })
              .state('app.page.post', {
                  url: '/post',
                  templateUrl: 'tpl/page_post.html'
              })
              .state('app.page.search', {
                  url: '/search',
                  templateUrl: 'tpl/page_search.html'
              })
              .state('app.page.invoice', {
                  url: '/invoice',
                  templateUrl: 'tpl/page_invoice.html'
              })
              .state('app.page.price', {
                  url: '/price',
                  templateUrl: 'tpl/page_price.html'
              })
              //   修改密码
              .state('app.page.modifyPwd', {
                  url: '/modifyPwd',
                  templateUrl: 'tpl/page_modifyPwd.html',
                  resolve: {
                      deps: ['uiLoad',
                          function( uiLoad ){
                              return uiLoad.load( ['js/controllers/modifyPwd.js'] );
                          }]
                  }
              })
              // others
              .state('lockme', {
                  url: '/lockme',
                  templateUrl: 'tpl/page_lockme.html'
              })
              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: 'tpl/page_signin.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/signin.js'] );
                      }]
                  }
              })

              .state('access.signup', {
                  url: '/signup',
                  templateUrl: 'tpl/page_signup.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/signup.js'] );
                      }]
                  }
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: 'tpl/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: 'tpl/page_404.html'
              })


      }
    ]
  );