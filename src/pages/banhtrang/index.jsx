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

const API_URL = "https://6964b3a2e8ce952ce1f29a17.mockapi.io/BanhTrang";

const ManageBanhTrang = () => {
  const [banhTrangData, setBanhTrangData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();

  const fetchBanhTrangData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setBanhTrangData(response.data || []);
    } catch (error) {
      message.error("Khong the tai du lieu banh trang");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanhTrangData();
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
      message.success("Da xoa banh trang");
      fetchBanhTrangData();
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
        message.success("Da cap nhat banh trang");
      } else {
        await axios.post(API_URL, payload);
        message.success("Da them banh trang");
      }

      setModalOpen(false);
      fetchBanhTrangData();
    } catch (error) {
      if (error?.errorFields) {
        return;
      }
      message.error("Luu that bai");
    }
  };

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span style={{ color: '#5C2D1B', fontWeight: 600 }}>{text}</span>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => (
        <span style={{ color: '#7a5040' }}>{text}</span>
      ),
    },
    {
      title: "Giá (VNĐ)",
      dataIndex: "price",
      key: "price",
      render: (val) => (
        <span style={{ color: '#8B2D1F', fontWeight: 700 }}>
          {Number(val).toLocaleString('vi-VN')}đ
        </span>
      ),
    },
    {
      title: "Thao tác",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="default"
            onClick={() => openEditModal(record)}
            style={{
              borderColor: '#A63D2D',
              color: '#A63D2D',
              borderRadius: '8px',
              fontWeight: 600,
            }}
          >
            ✒ Sửa
          </Button>
          <Popconfirm
            title="Xóa bánh tráng này?"
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={() => handleDelete(record)}
          >
            <Button
              type="link"
              danger
              style={{ fontWeight: 600, padding: '0 8px' }}
            >
              🗑 Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div
        style={{
          marginBottom: 24,
          paddingBottom: 16,
          borderBottom: '2px solid #E8D5B5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: 22,
              fontFamily: 'serif',
              fontWeight: 700,
              color: '#8B2D1F',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            🥟 Quản Lý Bánh Tráng
          </h2>
          <p style={{ margin: '4px 0 0', color: '#A68060', fontSize: 13 }}>
            Danh sách các loại bánh tráng đầy đủ trong hệ thống
          </p>
        </div>
        <Button
          type="primary"
          onClick={openAddModal}
          style={{
            background: 'linear-gradient(135deg, #A63D2D 0%, #8B2D1F 100%)',
            border: 'none',
            borderRadius: 10,
            fontWeight: 700,
            letterSpacing: '0.04em',
            padding: '0 20px',
            height: 40,
            boxShadow: '0 4px 12px rgba(139,45,31,0.3)',
          }}
        >
          + Thêm Bánh Tráng
        </Button>
      </div>
      <Table
        rowKey="id"
        dataSource={banhTrangData}
        columns={columns}
        loading={loading}
      />

      <Modal
        title={editingRecord ? "Sua banh trang" : "Them banh trang"}
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
            <Input placeholder="Ten banh trang" />
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

export default ManageBanhTrang;
