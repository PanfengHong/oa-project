/**
 * oa-project mock 规则
 * 命中接口：GET /api/project/list
 */
import { registerMocks, type ResponseData } from '@zdy-oa/utils'

function ok<T>(data: T, message = ''): ResponseData<T> {
  return { code: 200, data, message }
}

const projects = [
  { id: 'p-001', name: '自研 OA 平台', owner: '前端组', progress: 35 },
  { id: 'p-002', name: '移动端 H5', owner: '全栈组', progress: 10 },
  { id: 'p-003', name: '数据中台', owner: '数据组', progress: 60 },
]

export function registerProjectMocks(): void {
  registerMocks([
    {
      method: 'GET',
      pattern: '/api/project/list',
      handler: () => ok(projects),
    },
  ])
}
