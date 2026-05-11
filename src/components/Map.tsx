export default function Map() {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[40px] overflow-hidden lux-shadow border border-clinic-rose/10 h-[500px] w-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.3688194483756!2d0.34758557685652697!3d50.81424915152399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df038df928d15f%3A0xe54e604f05c1024c!2sCalverton%2C%20Channel%20View%20Rd%2C%20Pevensey%20Bay%2C%20Pevensey%20BN24%206LU!5e0!3m2!1sen!2suk!4v1715421234567!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
