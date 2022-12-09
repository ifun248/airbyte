"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[46818],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=d(a),u=n,c=k["".concat(o,".").concat(u)]||k[u]||m[u]||i;return a?r.createElement(c,l(l({ref:e},s),{},{components:a})):r.createElement(c,l({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},21874:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={},l="Zendesk Support",p={unversionedId:"integrations/sources/zendesk-support",id:"integrations/sources/zendesk-support",title:"Zendesk Support",description:"This page guides you through setting up the Zendesk Support source connector.",source:"@site/../docs/integrations/sources/zendesk-support.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/zendesk-support",permalink:"/integrations/sources/zendesk-support",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/zendesk-support.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Zendesk Sunshine",permalink:"/integrations/sources/zendesk-sunshine"},next:{title:"Zendesk Talk",permalink:"/integrations/sources/zendesk-talk"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up the Zendesk Support source connector",id:"set-up-the-zendesk-support-source-connector",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],s={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"zendesk-support"},"Zendesk Support"),(0,n.kt)("p",null,"This page guides you through setting up the Zendesk Support source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Locate your Zendesk subdomain found in your account URL. For example, if your account URL is ",(0,n.kt)("inlineCode",{parentName:"li"},"https://{MY_SUBDOMAIN}.zendesk.com/"),", then ",(0,n.kt)("inlineCode",{parentName:"li"},"MY_SUBDOMAIN")," is your subdomain."),(0,n.kt)("li",{parentName:"ul"},"(For Airbyte Open Source) Find the email address associated with your Zendesk account. Also, generate an ",(0,n.kt)("a",{parentName:"li",href:"https://support.zendesk.com/hc/en-us/articles/4408889192858-Generating-a-new-API-token"},"API token")," for the account.")),(0,n.kt)("h2",{id:"set-up-the-zendesk-support-source-connector"},"Set up the Zendesk Support source connector"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into your ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Airbyte Cloud")," or Airbyte Open Source account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),". "),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Zendesk Support")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for your source."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Subdomain"),", enter your ",(0,n.kt)("a",{parentName:"li",href:"#prerequisites"},"Zendesk subdomain"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Start date"),", enter the date in ",(0,n.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DDTHH:mm:ssZ")," format. The data added on and after this date will be replicated. If this field is blank, Airbyte will replicate all data."),(0,n.kt)("li",{parentName:"ol"},"You can use OAuth or an API key to authenticate your Zendesk Support account. We recommend using OAuth for Airbyte Cloud and an API key for Airbyte Open Source.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To authenticate using OAuth for Airbyte Cloud, click ",(0,n.kt)("strong",{parentName:"li"},"Authenticate your Zendesk Support account")," to sign in with Zendesk Support and authorize your account. "),(0,n.kt)("li",{parentName:"ul"},"To authenticate using an API key for Airbyte Open Source, select ",(0,n.kt)("strong",{parentName:"li"},"API key")," from the Authentication dropdown and enter your ",(0,n.kt)("a",{parentName:"li",href:"#prerequisites"},"API key"),". Enter the ",(0,n.kt)("strong",{parentName:"li"},"Email")," associated with your Zendesk Support account.   "))),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Zendesk Support source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh - overwrite"),(0,n.kt)("li",{parentName:"ul"},"Full Refresh - append"),(0,n.kt)("li",{parentName:"ul"},"Incremental - append")),(0,n.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,n.kt)("p",null,"The Zendesk Support source connector supports the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/#list-brands"},"Brands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/account-configuration/custom_roles/#list-custom-roles"},"Custom Roles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/groups"},"Groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/group_memberships"},"Group Memberships")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/macros"},"Macros")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/organizations"},"Organizations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/satisfaction_ratings"},"Satisfaction Ratings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/schedules/#list-schedules"},"Schedules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/sla_policies"},"SLA Policies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/tags"},"Tags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-ticket-export-time-based"},"Tickets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/ticket_audits"},"Ticket Audits")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-ticket-event-export"},"Ticket Comments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/ticket_fields"},"Ticket Fields")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/ticket_forms"},"Ticket Forms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/support/ticket_metrics"},"Ticket Metrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_metric_events/"},"Ticket Metric Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-user-export"},"Users"))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The connector is restricted by normal Zendesk ",(0,n.kt)("a",{parentName:"p",href:"https://developer.zendesk.com/rest_api/docs/support/usage_limits"},"requests limitation"),"."),(0,n.kt)("p",null,"The Zendesk connector ideally should not run into Zendesk API limitations under normal usage. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"Create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.18")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19432"},"19432")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Revert changes from version 0.2.15, use a test read instead")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.17")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19792"},"19792")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Transform ",(0,n.kt)("inlineCode",{parentName:"td"},"ticket_comments.via"),' "-" to null')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.16")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17326"},"17326")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.15")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15233"},"15233")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"subscription plan")," check on ",(0,n.kt)("inlineCode",{parentName:"td"},"streams discovery")," step to remove streams that are not accessible for fetch due to subscription plan restrictions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.14")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15036"},"15036")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Convert ",(0,n.kt)("inlineCode",{parentName:"td"},"ticket_audits.previous_value")," values to string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.13")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14829"},"14829")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Convert ",(0,n.kt)("inlineCode",{parentName:"td"},"tickets.custom_fields")," values to string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.12")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14304"},"14304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed Pagination for Group Membership stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.11")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14112"},"14112")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Fixed "Retry-After" non integer value')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.10")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13757"},"13757")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed the bug with ",(0,n.kt)("inlineCode",{parentName:"td"},"TicketMetrics")," stream, HTTP Error 429, caused by lots of API requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13261"},"13261")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bugfix for the unhandled ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/12591"},"ChunkedEncodingError")," and ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/12155"},"ConnectionError"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.8")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13055"},"13055")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed minor issue for stream ",(0,n.kt)("inlineCode",{parentName:"td"},"ticket_audits")," schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.7")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12335"},"12335")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adding fixtures to mock time.sleep for connectors that explicitly sleep")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.6")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12122"},"12122")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed the bug when only 100,000 Users are synced ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/11895"},"11895")," and fixed bug when ",(0,n.kt)("inlineCode",{parentName:"td"},"start_date")," is not used on user stream ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/12059"},"12059"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.5")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11727"},"11727")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed the bug when state was not parsed correctly")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11688"},"11688")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Small documentation corrections")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11349"},"11349")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed the bug when Tickets stream didn't return deleted records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11237"},"11237")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed the bug when TicketComments stream didn't return all records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11162"},"11162")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support of OAuth2.0 authentication method")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9456"},"9456")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update source to use future requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.12")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9785"},"9785")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add additional log messages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.11")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8987"},"8987")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8616"},"8616")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds Brands, CustomRoles and Schedules streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.8")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8168"},"8050")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds TicketMetricEvents stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.7")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8058"},"8058")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support of AccessToken authentication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.6")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8050"},"8050")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix wrong types for schemas, add TypeTransformer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.5")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7679"},"7679")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ticket_id and ticket_comments")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7377"},"7377")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix initially_assigned_at type in ticket metrics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7097"},"7097")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Corrected the connector's specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6513"},"6513")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed TicketComments stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5787"},"5787")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed incremental logic for the ticket_comments stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4861"},"4861")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Created CDK native zendesk connector")))))}m.isMDXComponent=!0}}]);