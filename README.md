
# Clipboard Sync Server

Clipboard Sync Server是一个用于多设备同步剪贴板内容的服务，可以让你在不同的设备上共享剪贴板数据。它支持Windows、MacOS和Linux操作系统，并提供了使用Docker进行部署的选项，推荐在内网或者私有网络环境中使用。默认情况下，服务将在端口8765上运行。

## 特性

- 多设备同步：将剪贴板内容同步到多个设备，确保您的剪贴板数据无缝共享。

## 安装

### 使用Docker部署

推荐的部署方式是使用Docker容器。在安装Docker后，执行以下命令来获取Clipboard Sync Server的Docker镜像：

```shell
docker pull fengyebuhong/clipboard-sync-server
```

### 手动部署

如果您不使用Docker，可以手动部署Clipboard Sync Server。请按照以下步骤进行：

1. 安装依赖：确保您的服务器已经安装了Node.js(v16.17.1)环境。

2. 下载项目代码：您可以通过下载本项目的源代码并解压缩，或者使用Git进行克隆。

3. 进入项目目录：使用命令行工具进入项目所在的目录。

4. 安装依赖：在项目目录中执行以下命令安装所需的依赖项：

   ```shell
   npm install
   ```

5. 启动服务：执行以下命令来启动Clipboard Sync Server：

   ```shell
   node index.js
   ```

## 使用

一旦服务器成功运行，您可以在多个设备上使用Clipboard Sync Server 客户端应用程序，以便同步剪贴板内容。在客户端应用程序中，请确保将服务器地址设置为您的服务器的IP地址或域名，并使用默认端口8765。然后，您就可以开始同步剪贴板内容了。

## 支持

如果您遇到任何问题或需要帮助，请随时在GitHub上提交问题或请求帮助。我们将竭尽全力为您提供支持。

## 许可

Clipboard Sync Server 使用 MIT 许可证。有关更多信息，请参阅[LICENSE文件](LICENSE)。

---

请注意，上述文档是一个示例，您可能需要根据项目的实际情况和需求进行调整和扩展。此外，您还可以添加更多的详细信息、配置示例等，以帮助用户更好地理解和使用您的项目。
