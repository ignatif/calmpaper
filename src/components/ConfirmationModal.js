import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Flex from 'components/atoms/flex'

export default ({ show, close, onDelete }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={close}
      style={{
        content: {
          position: 'relative',
          top: 200,
          left: 'auto',
          right: 'auto',
          bottom: 'auto',
          margin: '0 auto',
          border: 0,
          maxWidth: 480,
          textAlign: 'center',
          paddingTop: '70px',
          paddingBottom: '45px',
          boxShadow: '0px 18px 36px rgba(0,0,0,0.15)',
          borderRadius: '16px',
          background: 'white',
        },
      }}
      className="donation-modal"
    >
      <div className="content">
        <div style={{ marginBottom: 36 }}>You sure?</div>
        <Flex row>
          <button
            className="btn btn-grey"
            onClick={close}
            style={{ marginRight: 8 }}
          >
            Cancel
          </button>
          <button className="btn btn-color" onClick={onDelete}>
            Delete
          </button>
        </Flex>
      </div>
      <style jsx>{`
        .donation-modal img {
          margin-bottom: 25px;
          height: 44px;
        }
        .donation-modal .content {
          width: 350px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .donation-modal h1 {
          font-size: 24px;
          line-height: 30px;
          font-weight: 600;
          color: #373737;
          margin: 0;
          text-align: center;
          margin-bottom: 16px;
          width: 100%;
        }
        .donation-modal p {
          color: #373737;
          font-size: 17px;
          line-height: 23px;
          margin: 0;
        }
        .donation-modal .info {
          margin-bottom: 40px;
        }
        .donation-modal button {
          margin-bottom: 25px;
        }
        .donation-modal .footer {
          font-size: 14px;
          line-height: 19px;
          opacity: 0.7;
        }

        .donation-modal .completed {
          width: 100%;
        }

        .donation-modal .card-info {
          margin-bottom: 20px;
          padding: 10px 10px;
          height: 44px;
          border-radius: 6px;
          box-shadow: 0px 0px 0px 1px rgb(224, 224, 224),
            0px 2px 4px 0px rgba(0, 0, 0, 0.07),
            0px 1px 1.5px 0px rgba(0, 0, 0, 0.05);
        }

        .donation-modal .tip-text {
          color: rgba(0, 0, 0, 0.5);
          font-size: 14px;
          font-weight: normal;
          letter-spacing: -0.15px;
          text-align: center;
          margin: 20px 0;
        }

        .donation-modal {
          z-index: 10;
        }

        .ReactModalPortal {
          z-index: 10000;
        }
      `}</style>
    </Modal>
  )
}
