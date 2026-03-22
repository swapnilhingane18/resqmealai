import { useState } from 'react';
import Button from './Button';

export default function UploadForm() {
  const [formData, setFormData] = useState({
    foodName: '',
    quantity: '',
    location: '',
    expiryTime: '',
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputClasses = 'w-full px-4 py-3 rounded-xl bg-dark-bg border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm';

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-5">
      <div>
        <h2 className="text-xl font-bold text-text-primary">Donate Food</h2>
        <p className="text-sm text-text-secondary mt-1">Fill in the details to list your surplus food.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1.5">Food Name</label>
          <input
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            placeholder="e.g. Cooked Rice, Fresh Vegetables"
            className={inputClasses}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 5 kg, 20 servings"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">Expiry Time</label>
            <input
              type="datetime-local"
              name="expiryTime"
              value={formData.expiryTime}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1.5">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. 123 MG Road, Mumbai"
            className={inputClasses}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1.5">Food Image</label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="food-image-upload"
            />
            <label
              htmlFor="food-image-upload"
              className="flex items-center justify-center w-full py-8 rounded-xl border-2 border-dashed border-border hover:border-primary/40 transition-colors cursor-pointer bg-dark-bg/50"
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="max-h-40 rounded-lg object-cover" />
              ) : (
                <div className="text-center">
                  <svg className="w-8 h-8 mx-auto text-text-muted mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <p className="text-sm text-text-muted">Click to upload an image</p>
                  <p className="text-xs text-text-muted mt-1">PNG, JPG up to 5MB</p>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Submit Donation
      </Button>
    </form>
  );
}
