所有子应用都共用了同一个框架，（如果你想的话），在Src下新建一个文件夹即可以开始开发子应用

目录结构：
src下文件夹名称即为项目的名称、baseUrl
每一个子应用中可以存在多个子页面，但是子页面再往下的层级将不由子应用管理，应当由子页面自己维护

在router中可以看到路由的获取方式：const routesImport = import.meta.glob<IModuleType>('@/*/router/index.ts', { eager: true });
在这块可以看到只会将src目录下的任意一层目录下的Router文件夹中的index文件，请按照这个方式创建每个子页面的路由
当只有一个子页面时，还是会存在路由 baseurl/pagename/***，在这里的pagename失去意义，应因为只有一个页面，最好将这个页面文件夹使用标识如：unique，

在每个子页面的文件夹下，尽可能将所有相关的内容内聚。