# 数据与数据库 MCP | Data & Databases

[中文](#中文) | [English](#english)

---

## 中文

> 数据库连接、数据仓库、向量存储与数据处理 MCP 服务器。

### 关系型数据库

| 名称 | 厂商 | 描述 | 语言 | Stars |
|------|------|------|------|-------|
| [PostgreSQL MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) | Anthropic 官方 | PostgreSQL 查询与 schema 探索 | TypeScript | — |
| [SQLite MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) | Anthropic 官方 | SQLite 本地数据库操作 | Python | — |
| [MySQL MCP](https://github.com/benborla/mcp-server-mysql) | 社区 | MySQL 数据库查询与管理 | TypeScript | ![](https://img.shields.io/github/stars/benborla/mcp-server-mysql?style=flat-square) |
| [MCP Toolbox](https://github.com/googleapis/mcp-toolbox-for-databases) | Google 官方 | PostgreSQL、MySQL、AlloyDB、Spanner | Python | ![](https://img.shields.io/github/stars/googleapis/mcp-toolbox-for-databases?style=flat-square) |
| [Snowflake MCP](https://github.com/datawiz168/mcp-snowflake-service) | 社区 | Snowflake 数仓查询与 schema 探索 | Python | ![](https://img.shields.io/github/stars/datawiz168/mcp-snowflake-service?style=flat-square) |
| [Supabase MCP](https://github.com/supabase-community/supabase-mcp) | Supabase 社区 | PostgreSQL 数据库、认证、Edge Functions | TypeScript | ![](https://img.shields.io/github/stars/supabase-community/supabase-mcp?style=flat-square) |
| [CrateDB MCP](https://github.com/crate/cratedb-mcp) | CrateDB 官方 | 自然语言 Text-to-SQL 查询 | Python | ![](https://img.shields.io/github/stars/crate/cratedb-mcp?style=flat-square) |

### NoSQL 与缓存

| 名称 | 厂商 | 描述 | 语言 | Stars |
|------|------|------|------|-------|
| [Redis MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/redis) | Anthropic 官方 | Redis 键值操作 | TypeScript | — |
| [MongoDB MCP](https://github.com/mongodb-labs/mongodb-mcp-server) | MongoDB 官方 | 文档 CRUD、聚合、索引管理 | TypeScript | ![](https://img.shields.io/github/stars/mongodb-labs/mongodb-mcp-server?style=flat-square) |
| [Elasticsearch MCP](https://github.com/elastic/mcp-server-elasticsearch) | Elastic 官方 | 全文搜索、聚合分析、索引管理 | Rust | ![](https://img.shields.io/github/stars/elastic/mcp-server-elasticsearch?style=flat-square) |

### 向量数据库

| 名称 | 厂商 | 描述 | 语言 | Stars |
|------|------|------|------|-------|
| [Qdrant MCP](https://github.com/qdrant/mcp-server-qdrant) | Qdrant 官方 | 向量搜索与嵌入管理 | Python | ![](https://img.shields.io/github/stars/qdrant/mcp-server-qdrant?style=flat-square) |
| [Weaviate MCP](https://github.com/weaviate/mcp-server-weaviate) | Weaviate 官方 | 向量搜索与语义检索 | Python | ![](https://img.shields.io/github/stars/weaviate/mcp-server-weaviate?style=flat-square) |
| [Chroma MCP](https://github.com/chroma-core/chroma-mcp) | Chroma 官方 | 嵌入存储与相似度搜索 | Python | ![](https://img.shields.io/github/stars/chroma-core/chroma-mcp?style=flat-square) |
| [Pinecone MCP](https://github.com/pinecone-io/pinecone-mcp) | Pinecone 官方 | 大规模向量数据库 | TypeScript | ![](https://img.shields.io/github/stars/pinecone-io/pinecone-mcp?style=flat-square) |
| [Neo4j MCP](https://github.com/neo4j-contrib/mcp-neo4j) | Neo4j Labs 社区 | 图数据库与知识图谱，支持向量搜索 | Python | ![](https://img.shields.io/github/stars/neo4j-contrib/mcp-neo4j?style=flat-square) |

### 数据仓库与分析

| 名称 | 厂商 | 描述 | 语言 | Stars |
|------|------|------|------|-------|
| [BigQuery MCP](https://github.com/LucasHild/mcp-server-bigquery) | 社区 | Google BigQuery 数据分析 | Python | ![](https://img.shields.io/github/stars/LucasHild/mcp-server-bigquery?style=flat-square) |
| [Tableau MCP](https://github.com/tableau/tableau-mcp) | Tableau 官方 | 数据可视化与报表访问 | TypeScript | ![](https://img.shields.io/github/stars/tableau/tableau-mcp?style=flat-square) |
| [DuckDB MCP](https://github.com/ktanaka101/mcp-server-duckdb) | 社区 | 内嵌分析型 SQL 数据库 | Rust | ![](https://img.shields.io/github/stars/ktanaka101/mcp-server-duckdb?style=flat-square) |
| [ClickHouse MCP](https://github.com/ClickHouse/mcp-clickhouse) | ClickHouse 官方 | OLAP 数据库查询与分析 | Python | ![](https://img.shields.io/github/stars/ClickHouse/mcp-clickhouse?style=flat-square) |
| [Databricks MCP](https://github.com/JordiNeil/mcp-databricks-server) | 社区 | Databricks 数据仓库与 Unity Catalog | Python | ![](https://img.shields.io/github/stars/JordiNeil/mcp-databricks-server?style=flat-square) |
| [InfluxDB MCP](https://github.com/influxdata/influxdb3_mcp_server) | InfluxData 官方 | 时序数据存储与查询 | TypeScript | ![](https://img.shields.io/github/stars/influxdata/influxdb3_mcp_server?style=flat-square) |
| [StarRocks MCP](https://github.com/StarRocks/mcp-server-starrocks) | StarRocks 官方 | OLAP 数据库查询与 schema 探索 | Python | ![](https://img.shields.io/github/stars/StarRocks/mcp-server-starrocks?style=flat-square) |
| [Teradata MCP](https://github.com/Teradata/teradata-mcp-server) | Teradata 官方 | 企业级数据仓库查询与分析 | Python | ![](https://img.shields.io/github/stars/Teradata/teradata-mcp-server?style=flat-square) |
| [OceanBase MCP](https://github.com/oceanbase/mcp-oceanbase) | OceanBase 官方 | 分布式 SQL 数据库 | Python | ![](https://img.shields.io/github/stars/oceanbase/mcp-oceanbase?style=flat-square) |
| [Cloudera Iceberg MCP](https://github.com/cloudera/iceberg-mcp-server) | Cloudera 官方 | Apache Iceberg 表查询 via Impala | Python | ![](https://img.shields.io/github/stars/cloudera/iceberg-mcp-server?style=flat-square) |

---

## English

> MCP servers for database connectivity, querying and data processing.

### Relational Databases

| Name | Vendor | Description | Language | Stars |
|------|--------|-------------|----------|-------|
| [PostgreSQL MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) | Anthropic Official | PostgreSQL query and schema analysis | TypeScript | — |
| [SQLite MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) | Anthropic Official | SQLite local database operations | Python | — |
| [MySQL MCP](https://github.com/benborla/mcp-server-mysql) | Community | MySQL database connection and queries | TypeScript | ![](https://img.shields.io/github/stars/benborla/mcp-server-mysql?style=flat-square) |
| [MCP Toolbox](https://github.com/googleapis/mcp-toolbox-for-databases) | Google Official | PostgreSQL, MySQL, AlloyDB, Spanner | Python | ![](https://img.shields.io/github/stars/googleapis/mcp-toolbox-for-databases?style=flat-square) |
| [Snowflake MCP](https://github.com/datawiz168/mcp-snowflake-service) | Community | Snowflake data warehouse queries | Python | ![](https://img.shields.io/github/stars/datawiz168/mcp-snowflake-service?style=flat-square) |
| [Supabase MCP](https://github.com/supabase-community/supabase-mcp) | Supabase Community | PostgreSQL database, auth, Edge Functions | TypeScript | ![](https://img.shields.io/github/stars/supabase-community/supabase-mcp?style=flat-square) |
| [CrateDB MCP](https://github.com/crate/cratedb-mcp) | CrateDB Official | Natural language Text-to-SQL queries | Python | ![](https://img.shields.io/github/stars/crate/cratedb-mcp?style=flat-square) |

### NoSQL & Cache

| Name | Vendor | Description | Language | Stars |
|------|--------|-------------|----------|-------|
| [Redis MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/redis) | Anthropic Official | Redis key-value store operations | TypeScript | — |
| [MongoDB MCP](https://github.com/mongodb-labs/mongodb-mcp-server) | MongoDB Official | Document CRUD, aggregation, index management | TypeScript | ![](https://img.shields.io/github/stars/mongodb-labs/mongodb-mcp-server?style=flat-square) |
| [Elasticsearch MCP](https://github.com/elastic/mcp-server-elasticsearch) | Elastic Official | Full-text search, aggregations, index management | Rust | ![](https://img.shields.io/github/stars/elastic/mcp-server-elasticsearch?style=flat-square) |

### Vector Databases

| Name | Vendor | Description | Language | Stars |
|------|--------|-------------|----------|-------|
| [Qdrant MCP](https://github.com/qdrant/mcp-server-qdrant) | Qdrant Official | Vector search and embedding management | Python | ![](https://img.shields.io/github/stars/qdrant/mcp-server-qdrant?style=flat-square) |
| [Weaviate MCP](https://github.com/weaviate/mcp-server-weaviate) | Weaviate Official | Vector search and semantic retrieval | Python | ![](https://img.shields.io/github/stars/weaviate/mcp-server-weaviate?style=flat-square) |
| [Chroma MCP](https://github.com/chroma-core/chroma-mcp) | Chroma Official | Embedding storage and similarity search | Python | ![](https://img.shields.io/github/stars/chroma-core/chroma-mcp?style=flat-square) |
| [Pinecone MCP](https://github.com/pinecone-io/pinecone-mcp) | Pinecone Official | Large-scale vector database | TypeScript | ![](https://img.shields.io/github/stars/pinecone-io/pinecone-mcp?style=flat-square) |
| [Neo4j MCP](https://github.com/neo4j-contrib/mcp-neo4j) | Neo4j Labs Community | Graph database and knowledge graph with vector search | Python | ![](https://img.shields.io/github/stars/neo4j-contrib/mcp-neo4j?style=flat-square) |

### Data Warehouses & Analytics

| Name | Vendor | Description | Language | Stars |
|------|--------|-------------|----------|-------|
| [BigQuery MCP](https://github.com/LucasHild/mcp-server-bigquery) | Community | Google BigQuery data analysis | Python | ![](https://img.shields.io/github/stars/LucasHild/mcp-server-bigquery?style=flat-square) |
| [Tableau MCP](https://github.com/tableau/tableau-mcp) | Tableau Official | Data visualization and report access | TypeScript | ![](https://img.shields.io/github/stars/tableau/tableau-mcp?style=flat-square) |
| [DuckDB MCP](https://github.com/ktanaka101/mcp-server-duckdb) | Community | Analytical in-process SQL database | Rust | ![](https://img.shields.io/github/stars/ktanaka101/mcp-server-duckdb?style=flat-square) |
| [ClickHouse MCP](https://github.com/ClickHouse/mcp-clickhouse) | ClickHouse Official | OLAP database queries and analytics | Python | ![](https://img.shields.io/github/stars/ClickHouse/mcp-clickhouse?style=flat-square) |
| [Databricks MCP](https://github.com/JordiNeil/mcp-databricks-server) | Community | Databricks data warehouse and Unity Catalog | Python | ![](https://img.shields.io/github/stars/JordiNeil/mcp-databricks-server?style=flat-square) |
| [InfluxDB MCP](https://github.com/influxdata/influxdb3_mcp_server) | InfluxData Official | Time-series data storage and queries | TypeScript | ![](https://img.shields.io/github/stars/influxdata/influxdb3_mcp_server?style=flat-square) |
| [StarRocks MCP](https://github.com/StarRocks/mcp-server-starrocks) | StarRocks Official | OLAP database queries and schema exploration | Python | ![](https://img.shields.io/github/stars/StarRocks/mcp-server-starrocks?style=flat-square) |
| [Teradata MCP](https://github.com/Teradata/teradata-mcp-server) | Teradata Official | Enterprise data warehouse queries and analytics | Python | ![](https://img.shields.io/github/stars/Teradata/teradata-mcp-server?style=flat-square) |
| [OceanBase MCP](https://github.com/oceanbase/mcp-oceanbase) | OceanBase Official | Distributed SQL database | Python | ![](https://img.shields.io/github/stars/oceanbase/mcp-oceanbase?style=flat-square) |
| [Cloudera Iceberg MCP](https://github.com/cloudera/iceberg-mcp-server) | Cloudera Official | Apache Iceberg tables via Impala | Python | ![](https://img.shields.io/github/stars/cloudera/iceberg-mcp-server?style=flat-square) |
