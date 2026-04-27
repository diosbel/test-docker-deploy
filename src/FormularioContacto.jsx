import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const FormularioContacto = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    message.success('¡Formulario enviado con éxito!');
    console.log('Valores del formulario:', values);
  };

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#1890ff' }}>Contacto</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px' }}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[
            { required: true, message: 'Por favor ingresa tu nombre' },
            { min: 2, message: 'El nombre debe tener al menos 2 caracteres' },
          ]}
          style={{ marginBottom: '16px' }}
        >
          <Input
            placeholder="Ingresa tu nombre"
            prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
            style={{ borderRadius: '4px' }}
          />
        </Form.Item>

        <Form.Item
          label="Correo Electrónico"
          name="email"
          rules={[
            { required: true, message: 'Por favor ingresa tu correo electrónico' },
            { type: 'email', message: 'Por favor ingresa un correo electrónico válido' },
          ]}
          style={{ marginBottom: '16px' }}
        >
          <Input
            placeholder="Ingresa tu correo electrónico"
            prefix={<MailOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
            style={{ borderRadius: '4px' }}
          />
        </Form.Item>

        <Form.Item
          label="Mensaje"
          name="mensaje"
          rules={[
            { required: true, message: 'Por favor ingresa tu mensaje' },
            { min: 10, message: 'El mensaje debe tener al menos 10 caracteres' },
          ]}
          style={{ marginBottom: '24px' }}
        >
          <TextArea
            rows={4}
            placeholder="Ingresa tu mensaje"
            style={{ borderRadius: '4px', resize: 'vertical' }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%', backgroundColor: '#1890ff', borderColor: '#1890ff' }}
          >
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormularioContacto;
