import { ProjectListPage } from './pages/ProjectListPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import type { OaModuleDefinition } from './types'

export const projectModule: OaModuleDefinition = {
  id: 'oa-project',
  name: '项目',
  basePath: '/project',
  menu: [
    { key: 'list', label: '项目列表', path: '/project' },
    { key: 'detail', label: '示例详情', path: '/project/p-001' },
  ],
  routes: [
    { index: true, element: <ProjectListPage /> },
    { path: ':projectId', element: <ProjectDetailPage /> },
  ],
}
