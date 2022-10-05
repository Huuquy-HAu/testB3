import React from 'react';
import { useState } from 'react';
import './App.css';
import { Button, Modal, Form, message, Input, DatePicker, Space, Empty, Popconfirm } from 'antd';
import 'antd/dist/antd.css';
import { useForm } from 'rc-field-form';




function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexEdit, setIndexEdit] = useState(0)
  const [form] = Form.useForm()
  const [ar, setAr] = useState([
    { name: 'Làm bài tập', description: "Làm luôn trong ngày hôm nay", deadline: '2022-10-03' }
  ])

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const onFinish = (values) => {
    console.log(values);
    console.log(39, indexEdit);
    ar[indexEdit] = values
    setAr([...ar])
    message.success('Sửa thành công')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Không thành công')
  };

  const add = () => {
    let name = document.querySelector('.input-name').value;
    let des = document.querySelector('.input-des').value;
    let date = document.querySelector('#input-date').value;

    if (!name || !des || !date) {
      message.error("Không được để trống thông tin !!!")
    } else {
      setAr([...ar, { name: name, description: des, deadline: date }])
      message.success('Thêm thành công')
      document.querySelector('.input-name').value = ''
      document.querySelector('.input-des').value = ''
      document.querySelector('#input-date').value = ''
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="todoList-header">
          <h1>TodoList</h1>
        </div>
        <div className="todoList-input">
          <input type="text" className='input-name' placeholder='Name' />
          <input type="text" className='input-des' placeholder='Description' />
          <input type="date" name="" id="input-date" />
          <button onClick={add}>Add</button>
        </div>
        <div className="todoList-output">
          {ar.length > 0 ?
            ar.map((value, index) => {


              const deleteBtn = () => {
                ar.splice(index, 1)
                setAr([...ar])
                message.success('Xóa thành công')
              }
              const showModal = () => {
                console.log(90, index);
                setIndexEdit(index)
                setIsModalOpen(true);
                form.setFieldsValue(
                  {
                    name: ar[index].name,
                    description: ar[index].description,
                    deadline: ar[index].deadline
                  })
              };


              return (
                <div className="data" key={index}>
                  <div className="data-left">
                    <h1>{value.name}</h1>
                    <p><i>{value.description}</i></p>
                    <p>{value.deadline}</p>
                  </div>
                  <div className="data-right">
                    <Button type="primary" onClick={() => { showModal() }}>
                      Sửa
                    </Button>
                    <Popconfirm title="Sure to delete?" onConfirm={deleteBtn}>
                      <Button type='primary' danger>Delete</Button>
                    </Popconfirm>
                  </div>
                </div>
              )
            }) :
            <Empty />
          }
        </div>
        <Modal title="Edit Form" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form form={form} name="basic" labelCol={{ span: 24, }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name='name'
              rules={[
                {
                  required: true,
                  message: 'Không được để trống',
                },
              ]}
            >
              <Input placeholder='Name' style={{ width: "100%", padding: '8px 16px', outline: '0', border: 'none', borderBottom: "1px solid gray" }} />
            </Form.Item>

            <Form.Item
              label=""
              name='description'
              rules={[
                {
                  required: true,
                  message: 'Không được để trống',
                },
              ]}
            >
              <Input placeholder='Description' style={{ width: "100%", padding: '8px 16px', outline: '0', border: 'none', borderBottom: "1px solid gray" }} />
            </Form.Item>

            <Form.Item
              label=""
              name='deadline'
              rules={[
                {
                  required: true,
                  message: 'Không được để trống',
                },
              ]}
            >
              <input type="date" name="" id="" style={{ width: "100%", padding: '8px 16px', outline: '0', border: 'none', borderBottom: "1px solid gray" }} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Edit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default App;
