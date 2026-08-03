import { useParams } from 'react-router-dom'
import '../module.css'

export function ProjectDetailPage() {
  const { projectId } = useParams()

  return (
    <div className="oa-module-page">
      <h2>项目详情 · {projectId}</h2>
      <div className="oa-module-card" style={{ maxWidth: 480 }}>
        <p>里程碑、成员与文档库将在此模块扩展。</p>
        <p>当前为占位页面，便于验证主应用动态路由。</p>
      </div>
    </div>
  )
}
