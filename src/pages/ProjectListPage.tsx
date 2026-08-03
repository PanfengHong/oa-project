import { Link } from 'react-router-dom'
import '../module.css'

const projects = [
  { id: 'p-001', name: '自研 OA 平台', owner: '前端组', progress: 35 },
  { id: 'p-002', name: '移动端 H5', owner: '全栈组', progress: 10 },
]

export function ProjectListPage() {
  return (
    <div className="oa-module-page">
      <h2>项目列表</h2>
      <p className="oa-module-page__desc">oa-project 业务模块</p>
      <ul className="oa-module-list">
        {projects.map((p) => (
          <li key={p.id}>
            <strong>
              <Link to={`/project/${p.id}`}>{p.name}</Link>
            </strong>
            <span>
              负责人 {p.owner} · 进度 {p.progress}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
