import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Plus, X } from 'lucide-react';

interface CollectionItem {
  brand: string;
  category: string;
  description: string;
  images: string[];
}

export default function NewCollection() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CollectionItem[]>([
    {
      brand: '',
      category: '',
      description: '',
      images: []
    }
  ]);

  const [location, setLocation] = useState('');

  const handleAddItem = () => {
    setItems([...items, { brand: '', category: '', description: '', images: [] }]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/collections');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Request New Collection</h1>
        <p className="text-gray-600">
          Add your luxury items for professional evaluation and sale.
        </p>
      </motion.section>

      <form onSubmit={handleSubmit} className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Collection Details</h2>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#7406c7] focus:ring focus:ring-[#7406c7] focus:ring-opacity-50"
              placeholder="Enter your address"
              required
            />
          </div>
        </motion.div>

        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 relative"
          >
            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveItem(index)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            
            <h3 className="text-lg font-medium mb-4">Item {index + 1}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>
                <input
                  type="text"
                  value={item.brand}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[index].brand = e.target.value;
                    setItems(newItems);
                  }}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#7406c7] focus:ring focus:ring-[#7406c7] focus:ring-opacity-50"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={item.category}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[index].category = e.target.value;
                    setItems(newItems);
                  }}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#7406c7] focus:ring focus:ring-[#7406c7] focus:ring-opacity-50"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Bags">Bags</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Jewelry">Jewelry</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={item.description}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[index].description = e.target.value;
                    setItems(newItems);
                  }}
                  rows={3}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#7406c7] focus:ring focus:ring-[#7406c7] focus:ring-opacity-50"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-[#7406c7] transition-colors">
                  <div className="space-y-1 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#7406c7] hover:text-[#5c0599] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#7406c7]">
                        <span>Upload images</span>
                        <input type="file" className="sr-only" multiple accept="image/*" />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between"
        >
          <button
            type="button"
            onClick={handleAddItem}
            className="inline-flex items-center text-[#7406c7] px-4 py-2 rounded-lg hover:bg-[#7406c7] hover:bg-opacity-10 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Another Item
          </button>

          <button
            type="submit"
            className="bg-[#7406c7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5c0599] transition-colors"
          >
            Submit Collection Request
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}