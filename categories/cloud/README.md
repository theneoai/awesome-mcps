# 云服务与基础设施 MCP | Cloud & Infrastructure

[中文](#中文) | [English](#english)

---

## 中文

> 主流云平台的官方 MCP 服务器，涵盖 AWS、Azure、GCP、Cloudflare。

### Amazon Web Services (AWS)

| 名称 | 描述 | Stars |
|------|------|-------|
| [AWS MCP Servers](https://github.com/awslabs/mcp) | 官方套件，60+ 服务：EC2、S3、Lambda、EKS、Bedrock、DynamoDB 等 | ![](https://img.shields.io/github/stars/awslabs/mcp?style=flat-square) |
| [AWS KB Retrieval](https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server) | Bedrock 知识库 RAG 检索（Anthropic 官方） | — |

**AWS MCP 套件涵盖的服务：**
- 计算：EC2、ECS、Lambda、Fargate
- 存储：S3、EFS、Glacier
- 数据库：RDS、DynamoDB、ElastiCache、Aurora
- AI/ML：Bedrock、SageMaker、Rekognition
- 网络：VPC、Route53、CloudFront、ELB
- 安全：IAM、KMS、Secrets Manager、GuardDuty
- 监控：CloudWatch、CloudTrail、X-Ray
- 消息：SQS、SNS、EventBridge、Kinesis

### Microsoft Azure

| 名称 | 描述 | Stars |
|------|------|-------|
| [Azure MCP](https://github.com/Azure/azure-mcp) | Azure 资源管理、SQL、Storage、Key Vault、Monitor | ![](https://img.shields.io/github/stars/Azure/azure-mcp?style=flat-square) |

### Google Cloud Platform (GCP)

| 名称 | 描述 | Stars |
|------|------|-------|
| [MCP Toolbox for Databases](https://github.com/googleapis/mcp-toolbox-for-databases) | Cloud SQL、AlloyDB、Spanner、Bigtable、Firestore | ![](https://img.shields.io/github/stars/googleapis/mcp-toolbox-for-databases?style=flat-square) |
| [BigQuery MCP](https://github.com/LucasHild/mcp-server-bigquery) | BigQuery 数据仓库分析 | ![](https://img.shields.io/github/stars/LucasHild/mcp-server-bigquery?style=flat-square) |
| [Cloud Run MCP](https://github.com/googlecloudplatform/cloud-run-mcp) | 官方，部署和管理 Cloud Run 服务 | ![](https://img.shields.io/github/stars/GoogleCloudPlatform/cloud-run-mcp?style=flat-square) |
| [Google Drive MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive) | Google Drive 文档管理（官方） | — |
| [Google Maps MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps) | Places、Geocoding、Directions（官方） | — |

### Cloudflare

| 名称 | 描述 | Stars |
|------|------|-------|
| [Cloudflare MCP](https://github.com/cloudflare/mcp-server-cloudflare) | DNS、Workers、R2 Storage、Zero Trust，覆盖 2500+ API 端点 | ![](https://img.shields.io/github/stars/cloudflare/mcp-server-cloudflare?style=flat-square) |

### 平台即服务 (PaaS)

| 名称 | 描述 | Stars |
|------|------|-------|
| [Heroku MCP](https://github.com/heroku/heroku-mcp-server) | 官方，应用管理、Dynos、PostgreSQL、Pipeline | ![](https://img.shields.io/github/stars/heroku/heroku-mcp-server?style=flat-square) |
| [Railway MCP](https://github.com/railwayapp/railway-mcp-server) | 官方，项目部署、环境变量、服务管理 | ![](https://img.shields.io/github/stars/railwayapp/railway-mcp-server?style=flat-square) |

### 容器与编排

| 名称 | 描述 | 语言 | Stars |
|------|------|------|-------|
| [Helm MCP](https://github.com/helm/mcp-server) | K8s 包管理，Chart 仓库、部署 | Go | ![](https://img.shields.io/github/stars/helm/mcp-server?style=flat-square) |
| [Flux MCP](https://github.com/fluxcd/mcp-server) | GitOps 应用同步，Kustomize、HelmRelease | Go | ![](https://img.shields.io/github/stars/fluxcd/mcp-server?style=flat-square) |

### 其他云平台

| 名称 | 厂商 | 描述 | Stars |
|------|------|------|-------|
| [IBM MCP](https://github.com/IBM/mcp) | IBM 官方 | IBM Cloud、watsonx AI 服务集成 | ![](https://img.shields.io/github/stars/IBM/mcp?style=flat-square) |
| [Firebase MCP](https://github.com/gannonh/firebase-mcp) | 社区 | Firebase Auth、Firestore、Storage | ![](https://img.shields.io/github/stars/gannonh/firebase-mcp?style=flat-square) |
| [Kubernetes MCP](https://github.com/containers/kubernetes-mcp-server) | Red Hat | K8s & OpenShift 集群管理 | ![](https://img.shields.io/github/stars/containers/kubernetes-mcp-server?style=flat-square) |
| [AlibabaCloud MCP](https://github.com/aliyun/alibabacloud-core-mcp-server) | 阿里云 官方 | ECS、VPC、CloudMonitor 资源管理 | ![](https://img.shields.io/github/stars/aliyun/alibabacloud-core-mcp-server?style=flat-square) |
| [DigitalOcean MCP](https://github.com/digitalocean-labs/mcp-digitalocean) | DigitalOcean 官方 | Droplets、VPC、Storage、Domains | ![](https://img.shields.io/github/stars/digitalocean-labs/mcp-digitalocean?style=flat-square) |
| [Netlify MCP](https://github.com/netlify/netlify-mcp) | Netlify 官方 | 站点部署、函数、环境变量管理 | ![](https://img.shields.io/github/stars/netlify/netlify-mcp?style=flat-square) |

### 消息队列

| 名称 | 描述 | Stars |
|------|------|-------|
| [Kafka MCP](https://github.com/confluentinc/mcp-kafka) | 事件流平台，Topic、Producer、Consumer 管理 | ![](https://img.shields.io/github/stars/confluentinc/mcp-kafka?style=flat-square) |
| [RabbitMQ MCP](https://github.com/rabbitmq/mcp-server) | 消息队列，Queue、Exchange、管理 | TypeScript | ![](https://img.shields.io/github/stars/rabbitmq/mcp-server?style=flat-square) |

### 监控与可观测性

| 名称 | 描述 | 语言 | Stars |
|------|------|------|-------|
| [Prometheus MCP](https://github.com/prometheus/mcp-server) | 云原生监控，指标查询、告警规则管理 | Go | ![](https://img.shields.io/github/stars/prometheus/mcp-server?style=flat-square) |

### 日志系统

| 名称 | 描述 | 语言 | Stars |
|------|------|------|-------|
| [Grafana Loki MCP](https://github.com/grafana/loki-mcp) | 日志查询、标签过滤 | Go | ![](https://img.shields.io/github/stars/grafana/loki-mcp?style=flat-square) |
| [ELK Stack MCP](https://github.com/elastic/mcp-server) | 企业日志，Elasticsearch 查询、Logstash 管理 | Rust | ![](https://img.shields.io/github/stars/elastic/mcp-server?style=flat-square) |

---

## English

> Official MCP servers for major cloud platforms: AWS, Azure, GCP, Cloudflare.

### Amazon Web Services (AWS)

| Name | Description | Stars |
|------|-------------|-------|
| [AWS MCP Servers](https://github.com/awslabs/mcp) | Official suite, 60+ services: EC2, S3, Lambda, EKS, Bedrock, DynamoDB, etc. | ![](https://img.shields.io/github/stars/awslabs/mcp?style=flat-square) |
| [AWS KB Retrieval](https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server) | Bedrock knowledge base RAG retrieval (Anthropic Official) | — |

**AWS MCP suite covers:**
- Compute: EC2, ECS, Lambda, Fargate
- Storage: S3, EFS, Glacier
- Database: RDS, DynamoDB, ElastiCache, Aurora
- AI/ML: Bedrock, SageMaker, Rekognition
- Networking: VPC, Route53, CloudFront, ELB
- Security: IAM, KMS, Secrets Manager, GuardDuty
- Monitoring: CloudWatch, CloudTrail, X-Ray
- Messaging: SQS, SNS, EventBridge, Kinesis

### Microsoft Azure

| Name | Description | Stars |
|------|-------------|-------|
| [Azure MCP](https://github.com/Azure/azure-mcp) | Azure resource management, SQL, Storage, Key Vault, Monitor | ![](https://img.shields.io/github/stars/Azure/azure-mcp?style=flat-square) |

### Google Cloud Platform (GCP)

| Name | Description | Stars |
|------|-------------|-------|
| [MCP Toolbox for Databases](https://github.com/googleapis/mcp-toolbox-for-databases) | Cloud SQL, AlloyDB, Spanner, Bigtable, Firestore | ![](https://img.shields.io/github/stars/googleapis/mcp-toolbox-for-databases?style=flat-square) |
| [BigQuery MCP](https://github.com/LucasHild/mcp-server-bigquery) | BigQuery data warehouse analytics | ![](https://img.shields.io/github/stars/LucasHild/mcp-server-bigquery?style=flat-square) |
| [Cloud Run MCP](https://github.com/googlecloudplatform/cloud-run-mcp) | Official — deploy and manage Cloud Run services | ![](https://img.shields.io/github/stars/GoogleCloudPlatform/cloud-run-mcp?style=flat-square) |
| [Google Maps MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps) | Places, Geocoding, Directions (Official) | — |

### Cloudflare

| Name | Description | Stars |
|------|-------------|-------|
| [Cloudflare MCP](https://github.com/cloudflare/mcp-server-cloudflare) | DNS, Workers, R2 Storage, Zero Trust — 2,500+ API endpoints | ![](https://img.shields.io/github/stars/cloudflare/mcp-server-cloudflare?style=flat-square) |

### Platform as a Service (PaaS)

| Name | Description | Stars |
|------|-------------|-------|
| [Heroku MCP](https://github.com/heroku/heroku-mcp-server) | Official — apps, dynos, PostgreSQL, pipelines | ![](https://img.shields.io/github/stars/heroku/heroku-mcp-server?style=flat-square) |
| [Railway MCP](https://github.com/railwayapp/railway-mcp-server) | Official — projects, deployments, env vars, services | ![](https://img.shields.io/github/stars/railwayapp/railway-mcp-server?style=flat-square) |

### Containers & Orchestration

| Name | Description | Language | Stars |
|------|-------------|----------|-------|
| [Helm MCP](https://github.com/helm/mcp-server) | K8s package management, Chart repository, deployment | Go | ![](https://img.shields.io/github/stars/helm/mcp-server?style=flat-square) |
| [Flux MCP](https://github.com/fluxcd/mcp-server) | GitOps app sync, Kustomize, HelmRelease | Go | ![](https://img.shields.io/github/stars/fluxcd/mcp-server?style=flat-square) |

### Other Cloud Platforms

| Name | Vendor | Description | Stars |
|------|--------|-------------|-------|
| [IBM MCP](https://github.com/IBM/mcp) | IBM Official | IBM Cloud and watsonx AI services | ![](https://img.shields.io/github/stars/IBM/mcp?style=flat-square) |
| [Firebase MCP](https://github.com/gannonh/firebase-mcp) | Community | Firebase Auth, Firestore, Storage | ![](https://img.shields.io/github/stars/gannonh/firebase-mcp?style=flat-square) |
| [Kubernetes MCP](https://github.com/containers/kubernetes-mcp-server) | Red Hat | K8s & OpenShift cluster management | ![](https://img.shields.io/github/stars/containers/kubernetes-mcp-server?style=flat-square) |
| [AlibabaCloud MCP](https://github.com/aliyun/alibabacloud-core-mcp-server) | Alibaba Cloud Official | ECS, VPC, CloudMonitor resource management | ![](https://img.shields.io/github/stars/aliyun/alibabacloud-core-mcp-server?style=flat-square) |
| [DigitalOcean MCP](https://github.com/digitalocean-labs/mcp-digitalocean) | DigitalOcean Official | Droplets, VPC, Storage, Domains | ![](https://img.shields.io/github/stars/digitalocean-labs/mcp-digitalocean?style=flat-square) |
| [Netlify MCP](https://github.com/netlify/netlify-mcp) | Netlify Official | Site deployments, functions, env vars | ![](https://img.shields.io/github/stars/netlify/netlify-mcp?style=flat-square) |

### Message Queue

| Name | Description | Stars |
|------|-------------|-------|
| [Kafka MCP](https://github.com/confluentinc/mcp-kafka) | Event streaming platform — Topic, Producer, Consumer management | ![](https://img.shields.io/github/stars/confluentinc/mcp-kafka?style=flat-square) |
| [RabbitMQ MCP](https://github.com/rabbitmq/mcp-server) | Message queue — Queue, Exchange, management | TypeScript | ![](https://img.shields.io/github/stars/rabbitmq/mcp-server?style=flat-square) |
| [Tencent Cloud MCP](https://github.com/tencentcloud/mcp-server) | Tencent Cloud Official | COS, CVM, database resource management | ![](https://img.shields.io/github/stars/tencentcloud/mcp-server?style=flat-square) |
| [Huawei Cloud MCP](https://github.com/huaweicloud/mcp-server) | Huawei Cloud Official | ECS, VPC, OBS resource management | ![](https://img.shields.io/github/stars/huaweicloud/mcp-server?style=flat-square) |

### Monitoring & Observability

| Name | Description | Language | Stars |
|------|-------------|----------|-------|
| [Prometheus MCP](https://github.com/prometheus/mcp-server) | Cloud-native monitoring, metrics query, alerting rules management | Go | ![](https://img.shields.io/github/stars/prometheus/mcp-server?style=flat-square) |

### Logging

| Name | Description | Language | Stars |
|------|-------------|----------|-------|
| [Grafana Loki MCP](https://github.com/grafana/loki-mcp) | Log query, label filtering | Go | ![](https://img.shields.io/github/stars/grafana/loki-mcp?style=flat-square) |
