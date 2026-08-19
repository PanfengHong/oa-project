import { request } from '@zdy-oa/utils'

export const getProjects = () => {
    return request.request({
        url: '/api/project/list',
        method: 'GET'
    });
}