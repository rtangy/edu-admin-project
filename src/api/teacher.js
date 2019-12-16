import request from '@/utils/request'//模板提供的组件，axios的封装
const apiurl = "/eduservice/teacher/"
export default {
//getTeacherPageList的另一种写法，主要是将url部分进行抽取
  getTeacherPageListTest(page, limit, searchObj) {
    return request({
      //后端controller里面的路径
      url: `${apiurl}/moreConditionPageList/${page}/${limit}`,
      method: 'post',
      //传递条件对象，如果传递Json数据，使用data。如果不是Json，使用params
      data: searchObj
    })

  },
  //分页条件查询的方法
  //三个参数:当前页，每页记录数，条件封装对象
  getTeacherPageList(page, limit, searchObj) {
    return request({
      //后端controller里面的路径
      url: '/eduservice/teacher/moreConditionPageList/' + page + '/' + limit,
      method: 'post',
      //传递条件对象，如果传递Json数据，使用data。如果不是Json，使用params
      data: searchObj
    })

  },
  deleteTeacherById(id) {
    return request({
      url: '/eduservice/teacher/' + id,
      method: 'delete'
    })
  },
  //添加
  saveTeacher(teacher) {
    return request({
      url: '/eduservice/teacher/addTeacher',
      method: 'post',
      data: teacher
    })
  },
  //根据id查询
  getTeacherId(id){
    return request({
      url: '/eduservice/teacher/getTeacherInfo/'+id,
      method: 'get'
    })
  },
  //根据id修改
  updateTeacher(teacher){
    return request({
      url: '/eduservice/teacher/updateTeacher',
      method: 'post',
      data:teacher
    })
  }


}
