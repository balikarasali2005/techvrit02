import React from 'react'

const ViewproductDetails = () => {
  return (
    <Modal show={show} handleClose={handleClose}>
    <Modal.Header closeButton>Edit Product Form</Modal.Header>

    <Modal.Body>
      <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="Image"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Product Image"
            name="thumbnail"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTitle"
          label="Title"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="title"
            placeholder="Product Title"
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingDesc" label="Price" className="mb-3">
          <Form.Control
            type="text"
            name="price"
            placeholder="Price"
          />
        </FloatingLabel>


        <FloatingLabel controlId="floatingDesc" label="DiscountPercentage" className="mb-3" >
          <Form.Control
            type="text"
            name="discountPercentage"
            placeholder="DiscountPercentage"
          />
        </FloatingLabel>


        <FloatingLabel controlId="floatingDesc" label="Description">
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
          />
        </FloatingLabel>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ViewproductDetails
