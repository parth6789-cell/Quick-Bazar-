import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ShoppingCart, Home, Package, Languages } from "lucide-react";

const products = [
  { id: 1, name: "Rice (ચોખા / चावल)", price: 60, unit: "kg" },
  { id: 2, name: "Milk (દૂધ / दूध)", price: 30, unit: "liter" },
  { id: 3, name: "Wheat Flour (ગોહૂં / गेहूं का आटा)", price: 40, unit: "kg" },
  { id: 4, name: "Toor Dal (તૂવર દાળ / अरहर दाल)", price: 100, unit: "kg" },
  { id: 5, name: "Soap (સાબુ / साबुन)", price: 25, unit: "piece" }
];

export default function QuickBazarApp() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🛒 Quick Bazar - Grocery Delivery (Dabhoi)</h1>

      <Tabs defaultValue="products">
        <TabsList className="mb-4">
          <TabsTrigger value="products"><Package className="inline w-4 mr-1" /> Products</TabsTrigger>
          <TabsTrigger value="cart"><ShoppingCart className="inline w-4 mr-1" /> Cart</TabsTrigger>
          <TabsTrigger value="checkout"><Home className="inline w-4 mr-1" /> Checkout</TabsTrigger>
          <TabsTrigger value="language"><Languages className="inline w-4 mr-1" /> Language</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((item) => (
              <Card key={item.id} className="rounded-2xl shadow-md p-2">
                <CardContent>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>₹{item.price} / {item.unit}</p>
                  <Button onClick={() => addToCart(item)} className="mt-2 w-full">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cart">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item, idx) => (
                <div key={idx} className="border-b py-2 flex justify-between">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
              <div className="mt-4 font-bold">Total: ₹{total}</div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="checkout">
          <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
          <Input placeholder="Enter your address in Dabhoi" className="mb-2" />
          <h2 className="text-xl font-semibold mt-4 mb-2">Payment Method</h2>
          <div className="flex gap-4">
            <Button variant="outline">UPI</Button>
            <Button variant="outline">Cash on Delivery</Button>
          </div>
          <Button className="mt-6 w-full">Place Order</Button>
        </TabsContent>

        <TabsContent value="language">
          <p>This app supports English, Hindi (हिन्दी), and Gujarati (ગુજરાતી). Language switching feature coming soon.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
