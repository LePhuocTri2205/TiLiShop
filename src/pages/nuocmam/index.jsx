import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Space,
  Table,
  message,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "https://6964b3a2e8ce952ce1f29a17.mockapi.io/NuocMam";

const ManageNuocMam = () => {
  const [nuocMamData, setNuocMamData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();

  const fetchNuocMamData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setNuocMamData(response.data || []);
    } catch (error) {
      message.error("Khong the tai du lieu nuoc mam");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNuocMamData();
  }, []);

  const openAddModal = () => {
    setEditingRecord(null);
    form.resetFields();
    setModalOpen(true);
  };

  const openEditModal = (record) => {
    setEditingRecord(record);
    form.setFieldsValue({
      name: record.name,
      description: record.description,
      price: Number(record.price) || 0,
    });
    setModalOpen(true);
  };

  const handleDelete = async (record) => {
    try {
      await axios.delete(`${API_URL}/${record.id}`);
      message.success("Da xoa nuoc mam");
      fetchNuocMamData();
    } catch (error) {
      message.error("Xoa that bai");
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        name: values.name,
        description: values.description,
        price: values.price,
      };

      if (editingRecord) {
        await axios.put(`${API_URL}/${editingRecord.id}`, payload);
        message.success("Da cap nhat nuoc mam");
      } else {
        await axios.post(API_URL, payload);
        message.success("Da them nuoc mam");
      }

      setModalOpen(false);
      fetchNuocMamData();
    } catch (error) {
      if (error?.errorFields) {
        return;
      }
      message.error("Luu that bai");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => openEditModal(record)}>
            Sua
          </Button>
          <Popconfirm
            title="Xoa nuoc mam nay?"
            okText="Xoa"
            cancelText="Huy"
            onConfirm={() => handleDelete(record)}
          >
            <Button type="link" danger>
              Xoa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={openAddModal}>
          Them nuoc mam
        </Button>
      </Space>
      <Table
        rowKey="id"
        dataSource={nuocMamData}
        columns={columns}
        loading={loading}
      />

      <Modal
        title={editingRecord ? "Sua nuoc mam" : "Them nuoc mam"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={handleSubmit}
        okText="Luu"
        cancelText="Huy"
        destroyOnClose
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Nhap ten" }]}
          >
            <Input placeholder="Ten nuoc mam" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Nhap mo ta" }]}
          >
            <Input.TextArea rows={3} placeholder="Mo ta" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Nhap gia" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageNuocMam;
