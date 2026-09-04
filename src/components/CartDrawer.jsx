import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Lock, Check } from 'lucide-react';

const initialCart = [
  {
    id: 1,
    name: 'Aero Daypack 20L',
    color: 'Matte Black',
    price: 180,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Studio Canvas Tote',
    color: 'Sand',
    price: 140,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400',
  },
];

export default function CheckoutDrawer({ isOpen, onClose }) {
  const [cart, setCart] = useState(initialCart);
  const [step, setStep] = useState('cart'); // 'cart' | 'checkout' | 'success'
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 200 || subtotal === 0 ? 0 : 15;
  const total = Math.max(0, subtotal - discount + shipping);

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'MINIMAL10') {
      setDiscount(subtotal * 0.1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-neutral-50 text-neutral-900 flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-medium tracking-tight uppercase">
                {step === 'cart' && `Your Bag (${cart.length})`}
                {step === 'checkout' && 'Express Checkout'}
                {step === 'success' && 'Order Confirmed'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {step === 'cart' && (
              <>
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <p className="text-sm text-neutral-500 font-light mb-4">Your bag is empty.</p>
                    <button
                      onClick={onClose}
                      className="text-xs uppercase tracking-widest border-b border-neutral-900 pb-1 font-semibold"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 border-b border-neutral-200 pb-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-24 object-cover bg-neutral-200"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h3 className="text-xs font-medium">{item.name}</h3>
                              <span className="text-xs font-light">${item.price * item.quantity}</span>
                            </div>
                            <p className="text-[11px] text-neutral-500 mt-1">{item.color}</p>
                          </div>

                          <div className="flex items-center justify-between">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-neutral-300">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 hover:bg-neutral-200"
                              >
                                <Minus className="w-3 h-3 text-neutral-600" />
                              </button>
                              <span className="px-3 text-xs font-mono">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 hover:bg-neutral-200"
                              >
                                <Plus className="w-3 h-3 text-neutral-600" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-neutral-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {step === 'checkout' && (
              <form className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Shipping Details</h3>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-neutral-100 border border-neutral-200 p-3 text-xs focus:outline-none focus:border-neutral-900"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-neutral-100 border border-neutral-200 p-3 text-xs focus:outline-none focus:border-neutral-900"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-neutral-100 border border-neutral-200 p-3 text-xs focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full bg-neutral-100 border border-neutral-200 p-3 text-xs focus:outline-none focus:border-neutral-900"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full bg-neutral-100 border border-neutral-200 p-3 text-xs focus:outline-none focus:border-neutral-900"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full bg-neutral-100 border border-neutral-200 p-3 text-xs focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-500 pt-4">Payment</h3>
                <div className="p-4 border border-neutral-900 bg-neutral-100/50 flex items-center justify-between">
                  <span className="text-xs font-medium flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5" /> Credit Card (Encrypted)
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">VISA / MC</span>
                </div>
              </form>
            )}

            {step === 'success' && (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-neutral-900 text-neutral-50 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-light">Thank you for your order</h3>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Confirmation #84029 has been sent to your email.
                </p>
              </div>
            )}
          </div>

          {/* Drawer Footer (Calculations & CTA) */}
          {cart.length > 0 && step !== 'success' && (
            <div className="p-6 border-t border-neutral-200 bg-neutral-100/50 space-y-4">
              {/* Promo Form */}
              {step === 'cart' && (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo Code (MINIMAL10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-white border border-neutral-200 px-3 py-2 text-xs uppercase focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-neutral-900 text-neutral-50 text-xs px-4 py-2 hover:bg-neutral-800"
                  >
                    Apply
                  </button>
                </form>
              )}

              {/* Order Calculations */}
              <div className="space-y-1.5 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-medium text-neutral-900 text-sm pt-2 border-t border-neutral-200">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Button */}
              {step === 'cart' ? (
                <button
                  onClick={() => setStep('checkout')}
                  className="w-full bg-neutral-900 text-neutral-50 py-3.5 text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setStep('success')}
                  className="w-full bg-neutral-900 text-neutral-50 py-3.5 text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
                >
                  Pay ${total.toFixed(2)}
                </button>
              )}

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Encrypted 256-bit SSL Checkout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}