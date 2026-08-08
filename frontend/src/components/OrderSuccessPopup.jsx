
import React from 'react'

const OrderSuccessPopup = ({ order, currency, onClose, onViewOrders }) => {

  if (!order) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-md p-6 relative">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl"
        >
          ×
        </button>

        {/* Success icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
            ✓
          </div>
        </div>

        <h2 className="text-xl font-semibold text-center">
          Order Placed Successfully!
        </h2>

        <p className="text-gray-500 text-center mt-2">
          Thank you for your order.
        </p>

        {/* Order summary */}
        <div className="mt-5 border-t pt-4">

          {order.items?.map((item, index) => (

            <div
              key={index}
              className="flex justify-between items-center py-2"
            >

              <div>
                <p className="font-medium">
                  {item.name}
                </p>

                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                  {item.size && item.size !== 'no-size'
                    ? ` | Size: ${item.size}`
                    : ''
                  }
                </p>
              </div>

              <p>
                {currency}{item.price * item.quantity}
              </p>

            </div>

          ))}

        </div>

        <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
          <p>Total</p>
          <p>{currency}{order.amount}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={onClose}
            className="flex-1 border py-2 rounded"
          >
            Close
          </button>

          <button
            onClick={onViewOrders}
            className="flex-1 bg-pink-600 text-white py-2 rounded"
          >
            View Orders
          </button>

        </div>

      </div>

    </div>
  )
}

export default OrderSuccessPopup

