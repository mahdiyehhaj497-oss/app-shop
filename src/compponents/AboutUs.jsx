export default function AboutUs() {
    return (
      <>
        <div className="bg-slate-900 text-gray-300 ">
          <p className="text-2xl font-bold mx-18 pt-14">Who We Are?</p>
          <p className="text-xl mx-18 py-6 font-semibold">
            We are an online store built with one simple mission: to make
            shopping faster, easier, and more enjoyable for everyone. From day
            one, our goal has been to offer high‑quality products, reliable
            service, and a smooth shopping experience you can trust.
          </p>
        </div>
        <div className="bg-slate-700 text-gray-300 ">
          <p className="text-2xl font-bold mx-18 pt-8">Our Mission</p>
          <p className="text-xl mx-18 py-6 font-semibold">
            Our mission is to bring you the best products at fair prices,
            delivered quickly and safely to your door. We believe online
            shopping should be clear, convenient, and stress‑free — that’s why
            we focus on transparency, customer support, and a secure buying
            process.
          </p>
        </div>
        <div className="bg-slate-800 text-gray-300 ">
          <p className="text-2xl font-bold mx-18 pt-8">Our Story</p>
          <p className="text-xl mx-18 py-6 font-semibold">
            We started as a small team passionate about quality, technology, and
            customer satisfaction. Over time, thanks to the trust of our
            customers, we grew into a reliable online store with a strong
            commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-3  ">
          <div className="bg-mist-700 px-7 py-7 text-lg text-gray-400 shadow-2xl shadow-gray-400">
            <p>
              Our ValuesQuality First — We only offer products we truly believe
              inHonesty — Clear information, real prices, no exaggerationHuman
              Support — Our team is always here to helpCustomer Satisfaction —
              Your happiness is our top priority
            </p>
          </div>
          <div className="bg-mist-800 px-7 py-7 text-lg text-gray-400">
            <p>
              Why Choose UsFast and secure deliveryEasy returns and product
              guaranteeFriendly and responsive supportCarefully selected,
              high‑quality products
            </p>
          </div>
          <div className="bg-mist-600 px-7 py-7 text-lg text-gray-400">
            <p>
              Stay Connected If you have any questions or need help choosing the
              right product, our support team is always ready to assist you.
            </p>
          </div>
        </div>
      </>
    );
}