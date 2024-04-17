import { Typography, Table } from "antd"
import LayoutAdmin from "../Layout/LayoutAdmin"
//import json file by path
import data from "../assets/bienso.json"

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const dataSource = [
  ...data
  
]

const columns = [
  {
    title: 'Mã thẻ',
    dataIndex: 'key',
    key: 'key'
  },
  {
    title: 'Biển số xe',
    dataIndex: 'template',
    key: 'template'
  },
  {
    title: 'Thời gian vào',
    dataIndex: 'created_at',
    key: 'created_at'
  },
  {
    title: 'Thời gian ra',
    dataIndex: 'updated_at',
    key: 'updated_at'
  },
  {
    title: 'Mã nhân viên',
    dataIndex: 'staffId',
    key: 'staffId'
  }
]



const Transport = () => {

  // for(let i=1; i<20; i++){
  //   dataSource.push({
  //     cardId: i,
  //     bsx: "29A123"+i,
  //     timeIn: `${day}/${month}/${year} ${hour}:${minute}:${second}`,
  //     timeOut: `${day}/${month}/${year} ${hour}:${minute}:${second}`,
  //     staffId: 2125
  //   })
  // }


  return (
    <LayoutAdmin>
        <Typography.Title level={5}>Quản lý bãi đỗ</Typography.Title>
        <Table columns={columns} dataSource={dataSource} />
    </LayoutAdmin>
  )
}

export default Transport