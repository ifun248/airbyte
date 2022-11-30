"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(b,l(l({ref:t},c),{},{components:n})):o.createElement(b,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},l="Collecting Metrics",i={unversionedId:"operator-guides/collecting-metrics",id:"operator-guides/collecting-metrics",title:"Collecting Metrics",description:"Airbyte supports two ways to collect metrics - using datadog or open telemetry.",source:"@site/../docs/operator-guides/collecting-metrics.md",sourceDirName:"operator-guides",slug:"/operator-guides/collecting-metrics",permalink:"/operator-guides/collecting-metrics",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/collecting-metrics.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Example",id:"example",level:2},{value:"Run Opentelemetry and Airbyte locally",id:"run-opentelemetry-and-airbyte-locally",level:3},{value:"Run Opentelemetry and Airbyte on kubernetes",id:"run-opentelemetry-and-airbyte-on-kubernetes",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Additional information",id:"additional-information",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collecting-metrics"},"Collecting Metrics"),(0,r.kt)("p",null,"Airbyte supports two ways to collect metrics - using datadog or open telemetry.\nFill in ",(0,r.kt)("inlineCode",{parentName:"p"},"METRIC_CLIENT")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to get started!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisite:"),"\nIn order to get metrics from airbyte we need to deploy a container / pod called metrics-reporter like below "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"airbyte-metrics: \n  image: airbyte/metrics-reporter:${VERSION} \n  container_name: airbyte-metrics \n  environment: \n    - METRIC_CLIENT=${METRIC_CLIENT} \n    - OTEL_COLLECTOR_ENDPOINT=${OTEL_COLLECTOR_ENDPOINT}\n")),(0,r.kt)("h1",{id:"open-telemetry"},"Open Telemetry"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," change ",(0,r.kt)("inlineCode",{parentName:"li"},"METRIC_CLIENT")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"otel"),". "),(0,r.kt)("li",{parentName:"ol"},"Similarly, configure ",(0,r.kt)("inlineCode",{parentName:"li"},"OTEL_COLLECTOR_ENDPOINT")," to tell Airbyte where to send metrics RPC to.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"run-opentelemetry-and-airbyte-locally"},"Run Opentelemetry and Airbyte locally"),(0,r.kt)("p",null,"In this example we will run Airbyte locally along with an Open Telemetry Collector. The Open telemetry collector\nwill expose port 4317 to the localhost as the receiving endpoint."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(96139).Z,width:"1382",height:"342"})),(0,r.kt)("p",null,"Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setting up Open telemetry. In this example we will use the repository from ",(0,r.kt)("inlineCode",{parentName:"li"},"opentelemetry-java-docs"),".\nRun the following commands to have it up and running.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  git clone https://github.com/open-telemetry/opentelemetry-java-docs\n  cd opentelemetry-java-docs/otlp/docker\n  docker-compose up\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Configure Airbyte ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file. ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"METRIC_CLIENT")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"otel")," to indicate Airbyte to use Open telemetry to emit metric data."),(0,r.kt)("li",{parentName:"ol"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"OTEL_COLLECTOR_ENDPOINT")," to ",(0,r.kt)("inlineCode",{parentName:"li"},'"http://host.docker.internal:4317"')," because Open Telemetry\nCollector has enabled port forward from localhost:4317 to container port 4317. To send data to Collector container port 4317, we want to need to export data to physical machine's localhost:4317, which in docker will be represented as ",(0,r.kt)("inlineCode",{parentName:"li"},"http://host.docker.internal:4317"),". ",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Do ",(0,r.kt)("em",{parentName:"p"},"not")," use ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:4317")," or you will send data to the same container where Airbyte Worker is running."))),(0,r.kt)("li",{parentName:"ol"},"Start Airbyte server by running ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose up")," under airbyte repository. Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8000")," to visit Airbyte and start a sync, then go to ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:9090")," to access Prometheus - you should be able to see the metrics there. Alternatively, ")))),(0,r.kt)("h3",{id:"run-opentelemetry-and-airbyte-on-kubernetes"},"Run Opentelemetry and Airbyte on kubernetes"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Prerequisite:")," Read ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/docs/deploying-airbyte/on-kubernetes.md"},"https://github.com/airbytehq/airbyte/blob/master/docs/deploying-airbyte/on-kubernetes.md")," to understand how to start Airbyte on Kubernetes")),(0,r.kt)("p",null,"We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," in this example."),(0,r.kt)("p",null,"Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run open telemetry collector in the same Kubernetes context. Here we follow example in ",(0,r.kt)("a",{parentName:"li",href:"https://opentelemetry.io/docs/collector/getting-started/#kubernetes"},"OpenTelemetry doc")),(0,r.kt)("li",{parentName:"ol"},"edit ",(0,r.kt)("inlineCode",{parentName:"li"},"kube/overlays/stable/.env")," and add the following lines:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-aidl"},"METRIC_CLIENT=otel\nOTEL_COLLECTOR_ENDPOINT=<address>\n")),(0,r.kt)("p",null,"If you started open telemetry collector in the link above, the address should be ",(0,r.kt)("inlineCode",{parentName:"p"},"http://otel-collector:4317"),".\nNote the format - unlike the base ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),", there is no quote in ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file under kubernetes."),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"Deploy the airbyte metric pod :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ .Release.Name }}-metrics\n  namespace: {{ .Release.Namespace }}\n  labels: {{ set . "component" "metrics" | include "labels" | nindent 4 }}\nspec:\n  selector:\n    matchLabels: {{ set . "component" "metrics" | include "labels" | nindent 6 }}\n  template:\n    metadata:\n      labels: {{ set . "component" "metrics" | include "labels" | nindent 8 }}\n    spec:\n      containers:\n      - name: airbyte-metrics\n        image: "airbyte/metrics-reporter:latest"\n        imagePullPolicy: IfNotPresent\n        env:\n        - name: AIRBYTE_VERSION\n          value: latest\n        - name: DATABASE_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: {{ include "airbyte.database.secret.name" . }}\n              key: DATABASE_PASSWORD\n        - name: DATABASE_URL\n          value: {{ include "airbyte.database.url" . | quote }}\n        - name: DATABASE_USER\n          valueFrom:\n            secretKeyRef:\n              name: {{ .Release.Name }}-secrets\n              key: DATABASE_USER\n        - name: CONFIGS_DATABASE_MINIMUM_FLYWAY_MIGRATION_VERSION\n          value: 0.35.15.001\n        - name: METRIC_CLIENT\n          value: otel\n        - name: OTEL_COLLECTOR_ENDPOINT\n          value: http://otel-collector:4317\n')),(0,r.kt)("p",null,"Deploy an Open telemetry pod like below :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: otel-collector\n  namespace: {{ .Release.Namespace }}\n  labels: {{ set . "component" "otel-collector" | include "labels" | nindent 4 }} \nspec:\n  selector:\n    matchLabels: {{ set . "component" "otel-collector" | include "labels" | nindent 6 }} \n  replicas: 1\n  template:\n    metadata:\n      labels: {{ set . "component" "otel-collector" | include "labels" | nindent 8 }} \n    spec:\n      containers:\n      - command:\n          - "/otelcol"\n          - "--config=/conf/otel-collector-config.yaml"\n        image: "otel/opentelemetry-collector:latest"\n        name: otel-collector\n        ports:\n        - containerPort: 4317 # Default endpoint for OpenTelemetry receiver.\n        - containerPort: 8889 # Port for Prometheus instance\n        volumeMounts:\n        - name: config\n          mountPath: /conf\n      volumes:\n        - configMap:\n            name: otel-collector-conf\n            items:\n              - key: otel-collector-config\n                path: otel-collector-config.yaml\n          name: config\n')),(0,r.kt)("p",null,"WIth this Config Map :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: otel-collector-conf\n  namespace: {{ .Release.Namespace }}\n  labels: {{ set . "component" "otel-collector" | include "labels" | nindent 4 }} \ndata:\n  otel-collector-config: |\n    receivers:\n      otlp:\n        protocols:\n          grpc:\n           endpoint: "0.0.0.0:4317"\n    processors:\n      batch:\n      memory_limiter:\n        limit_mib: 1500\n        spike_limit_mib: 512\n        check_interval: 5s\n    exporters:\n      prometheus:\n        endpoint: "0.0.0.0:8889"\n        namespace: "default"\n    service:\n      pipelines:\n        metrics:\n          receivers: [otlp]\n          processors: [memory_limiter, batch]\n          exporters: [prometheus]\n')),(0,r.kt)("p",null,"Then we need a service to be able to access both open telemetry GRPC and Prometheus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Service\nmetadata:\n  name: otel-collector\n  namespace: {{ .Release.Namespace }}\n  labels: {{ set . "component" "otel-collector" | include "labels" | nindent 4 }} \nspec:\n  ports:\n  - name: otlp-grpc # Default endpoint for OpenTelemetry gRPC receiver.\n    port: 4317\n    protocol: TCP\n    targetPort: 4317\n  - name: prometheus\n    port: 8889\n  selector: {{ set . "component" "otel-collector" | include "labels" | nindent 6 }}\n')),(0,r.kt)("p",null,"And finally We can add a service monitor to receive metrics in prometheus and optionally add some prometheus rules to generate alerts.\nYou can replace with your prometheus name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: {{ .Release.Name }}\n  namespace: {{ .Release.Namespace }}\n  labels:\n    {{ set . "component" "metrics" | include "labels" | nindent 4 }}\n    prometheus: <your_prometheus_name>\nspec:\n  endpoints:\n    - interval: 30s\n      port: prometheus\n      path: /metrics\n      relabelings:\n      - action: labeldrop\n        regex: (service|endpoint|namespace|container)\n  selector:\n    matchLabels: {{ set . "component" "otel-collector" | include "labels" | nindent 6 }}\n')),(0,r.kt)("p",null,"One rule example :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: monitoring.coreos.com/v1\nkind: PrometheusRule\nmetadata:\n  name: {{ .Release.Name }}-rules\n  namespace: {{ .Release.Namespace }}\n  labels:\n    {{ set . "component" "prometheus-rules" | include "labels" | nindent 4 }}\n    prometheus: <your_prometheus_name>\nspec:\n  groups:\n    - name: airbyte\n      rules:\n        - alert: AirbyteJobFail\n          for: 0m\n          expr: min(airbyte_job_failed_by_release_stage) > 0\n          labels:\n            priority: P2\n          annotations:\n            summary: {{ `"An Airbyte Job has failed"` }}     \n')),(0,r.kt)("h1",{id:"datadog"},"Datadog"),(0,r.kt)("p",null,"The set up for Datadog is pretty straightforward. "),(0,r.kt)("p",null,"Set two env vars:"),(0,r.kt)("p",null,"1) ",(0,r.kt)("inlineCode",{parentName:"p"},"METRIC_CLIENT")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"datadog"),".\n2) ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLISH_METRICS")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Configure two additional env vars to the Datadog endpoint:"),(0,r.kt)("p",null,"1) Set ",(0,r.kt)("inlineCode",{parentName:"p"},"DD_AGENT_HOST")," to the IP where the Datadog agent is running.\n2) Set ",(0,r.kt)("inlineCode",{parentName:"p"},"DD_DOGSTATSD_PORT")," to the port the Datadog agent is using."),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-metrics/metrics-lib/src/main/java/io/airbyte/metrics/lib/OssMetricsRegistry.java"},"OssMetricsRegistry.java")," to get a complete list of metrics Airbyte is sending."),(0,r.kt)("h2",{id:"additional-information"},"Additional information"),(0,r.kt)("p",null,"Suppose you are looking for a non-production way of collecting metrics with dbt and Metabase, the tutorial ",(0,r.kt)("a",{parentName:"p",href:"https://airbyte.com/blog/airbyte-monitoring-with-dbt-and-metabase"},"Airbyte Monitoring with dbt and Metabase")," by accessing Airbyte's Postgres DB. The source code is open on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/open-data-stack"},"airbytehq/open-data-stack"),". Think of it as an exploratory for data analysts and data engineers of building a dashboard on top of the existing Airbyte Postgres database versus the Prometheus more for DevOps engineers in production."))}m.isMDXComponent=!0},96139:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/open_telemetry_example-f90c71d6f637399884ea40d4aff8874f.png"}}]);