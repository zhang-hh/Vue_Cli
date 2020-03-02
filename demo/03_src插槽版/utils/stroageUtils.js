/*
* 向localstroage中存储数据的工具函数
* */
export function saveTool(value) {
  localStorage.setItem('todos_key',JSON.stringify(value))
}
export function readTool() {
  return  JSON.parse(localStorage.getItem('todos_key')||'[]')
}
