import React, { useState } from 'react';
import { Heart, PawPrint, Phone, Mail, MapPin, Dog, Cat, Calendar as CalendarIcon, Award } from 'lucide-react';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './index.css';
import './App.css';




export default function RescueDogs() {
  const [selectedSection, setSelectedSection] = useState('home');
  const [selectedPet, setSelectedPet] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const pets = [
    { id: 1, name: "Lui", type: "Female Dog", age: "10 years", size: "Small", description: "Lui is a loving and loyal dog.She loves making you company and laying in bed with you.", image:"/lui.png" },
    { id: 2, name: "Coca", type: "Female Dog", age: "5 years", size: "Big", description: "Coca is a loyal and calm companion. Perfect for families with children.", image: "/coca.png" },
    { id: 3, name: "Simba", type: "Male Dog", age: "1 year", size: "Big", description: "Mía is an independent but loving cat. She likes to sleep in the sun and play with balls.", image: "/golden.png" },
    { id: 4, name: "Rocky", type: "Dog", age: "3 years", size: "Large", description: "Rocky is very energetic and loves to go for walks. Ideal for active people.", image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop" },
    { id: 5, name: "Greta", type: "Female Dog", age: "4 years", size: "Small", description: "Greta is sweet and calm. Perfect as a first pet.", image: "/greta.png" },
    { id: 6, name: "Corky", type: "Male Dog", age: "8 months", size: "Medium", description: "Corky is very social and likes to be close to people. A perfect companion.", image: "/corky.png" }
  ];

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">
        {/* 👇 Acá reemplazamos el icono por una imagen */}
        <img 
          src="/logo.png"  
          alt="RescataDogs logo" 
          className="logo-image"
        />
        <h1>RescataDogs</h1>
         <p>The easiest way to connect with rescued dogs, simple, safe, <br /> and designeed to help every dog find a loving home</p>
      </div>
      <div className="navbar-links">
        {['home', 'adopt', 'post-adoption', 'about', 'contact'].map(sec => ( 
          <button
            key={sec}
            onClick={() => setSelectedSection(sec)}
            className={selectedSection === sec ? 'active' : ''}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

  const Hero = () => (
  <section className="hero">
    <div className="hero-overlay">
      <div className="hero-content">
        <h1>Give a Dog a Second Chance 🐾</h1>
        <p>
          Join us in finding loving homes for rescued dogs across Mexico.  
          Every click brings hope to a tail that’s still wagging.
        </p>
        <button onClick={() => setSelectedSection('adopt')}>
          <Heart className="icon-btn" />
          <span>Meet Our Dogs</span>
        </button>
      </div>
    </div>
  </section>
);

  const AdoptSection = () => (
    <div className="adopt-section">
      <h2>Pets looking for a Home :)</h2>
      <div className="cards-container">
        {pets.map((pet) => (
          <div key={pet.id} className="card" onClick={() => setSelectedPet(pet)}>
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <div className="info">
              <span>{pet.type === 'Dog' ? <Dog className="icon-small" /> : <Cat className="icon-small" />} {pet.type}</span>
              <h2> </h2>
              <span><p className="text-lg font-semibold">Age: {pet.age}</p></span>
            </div>
            <p>{pet.description}</p>
            <button>I want to adopt</button>
          </div>
        ))}
      </div>
    </div>
  );

  const AboutSection = () => (
    <div className="about-section">
      <h2>About Us</h2>
      <div className="about-content">
        <img src="/about.png" 
        alt="About us" />
        <div>
          <p><strong>RescataDogs</strong> is a nonprofit organization that connects verified rescuers with long families to give stray dogs a loving and safe home </p>
          <p> We help reducing dog overpopulation and abandonment in Mexico by connecting shelters, and adopters in one safe, transparent, and easy-to-use platform</p>
          <div className="stats">
            <div><Award className="icon-big" /><p>100+ Successful Adoptions</p></div>
            <div><Heart className="icon-big" /><p>2+ Years of Rescuing</p></div>
          </div>
        </div>
      </div>
    </div>
  );

const PostAdoptionSection = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSchedule = () => setShowCalendar(true);
  const handleDateSelect = (date) => setSelectedDate(date);
  const handleConfirm = () => {
    alert(`✅ Appointment scheduled for ${selectedDate.toDateString()}`);
    setShowCalendar(false);
  };

  return (
    <div className="postadoption-section">
      <h2>Post Adoption Care 💕</h2>
      <div className="postadoption-content">
        <img 
          src="/adopt.png"
          alt="Happy adopted dog"
        />
        <div>
          <p>
            Adopting a dog is just the beginning of a lifelong friendship. Because a dog isn’t just a pet, it’s the most loyal companion and the truest friend a human could ever have
            Here you’ll find resources to ensure your new friend stays happy and healthy.
          </p>
          <ul>
            <li>🐾 <strong>Vaccination schedule:</strong> Stay on top of your dog’s health.</li>
            <li>🦴 <strong>Check-ins:</strong> Track their adaptation and well-being.</li>
            <li>📸 <strong>Share your story:</strong> Inspire others by telling your adoption experience.</li>
            <li>💬 <strong>Community tips:</strong> Connect with other adopters and rescuers.</li>
          </ul>

          <div className="postadoption-buttons">
           <button onClick={handleSchedule} className="schedule-btn">
              <CalendarIcon className="icon-small" /> Schedule a Visit
            </button>
            <button onClick={() => setSelectedSection('contact')}>
              Share Your Story
            </button>
          </div>
        </div>
      </div>

      {showCalendar && (
        <div className="modal" onClick={() => setShowCalendar(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Select a date for your appointment</h3>
            <Calendar onChange={handleDateSelect} value={selectedDate} />
            {selectedDate && (
              <p>
                You selected: <strong>{selectedDate.toDateString()}</strong>
              </p>
            )}
            <div className="modal-buttons">
              <button onClick={handleConfirm} disabled={!selectedDate}>
                Confirm
              </button>
              <button onClick={() => setShowCalendar(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const ContactSection = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Maneja los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! 🐶"); // por ahora solo muestra un mensaje
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-section">
      <h2>Get in Touch 🐾</h2>
      <p className="contact-subtitle">
        Have questions, want to adopt, or just say hi?  
        We’d love to hear from you!
      </p>

      <div className="contact-container">
        {/* Información de contacto */}
        <div className="contact-info">
          <div className="info-item">
            <Phone className="icon-medium" />
            <p>+1 234 567 8900</p>
          </div>
          <div className="info-item">
            <Mail className="icon-medium" />
            <p>info@rescatadogs.com</p>
          </div>
          <div className="info-item">
            <MapPin className="icon-medium" />
            <p>Main Street 123, City</p>
          </div>
        </div>

        {/* Formulario */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Send Message 📨</button>
        </form>
      </div>
    </section>
  );
};




  const Footer = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);

  return (
    <footer className="footer">
      <div>
        <PawPrint className="icon-small" />
        <p>RescataDogs</p>
        <small>© 2025 RescataDogs. All rights reserved.</small>
      </div>

      
      <div className="donate-section">
        <button 
          className="donate-button"
          onClick={() => setShowDonateModal(true)}
        >
          ❤️ Donate & Help Our Dogs
        </button>
      </div>


      {showDonateModal && (
        <div className="modal" onClick={() => setShowDonateModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Support RescataDogs 🐾</h3>
            <p>Your donation helps us provide food, shelter, and medical care for rescued dogs</p>

            <div className="donation-options">
              <button>$5 USD</button>
              <button>$10 USD</button>
              <button>$20 USD</button>
              <button>$50 USD</button>
            </div>

            <button 
              className="paypal-button"
              onClick={() => window.open('https://www.paypal.com/donate', '_blank')}
            >
              💳 Donate via PayPal
            </button>

            <button className="close-button" onClick={() => setShowDonateModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};


  return (
    <div>
      <NavBar />
      {selectedSection === 'home' && <Hero />}
      {selectedSection === 'adopt' && <AdoptSection />}
      {selectedSection === 'about' && <AboutSection />}
      {selectedSection === 'post-adoption' && <PostAdoptionSection />}
      {selectedSection === 'contact' && <ContactSection />}
      {selectedPet && (
        <div className="modal" onClick={() => setSelectedPet(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedPet.name}</h3>
            <img src={selectedPet.image} alt={selectedPet.name} />
            <p>{selectedPet.description}</p>
            <div className="pet-tags">
              <span>{selectedPet.type}</span>
              <span>{selectedPet.age}</span>
              <span>{selectedPet.size}</span>
            </div>
            <button onClick={() => { setSelectedPet(null); setSelectedSection('contact'); }}>I want to adopt {selectedPet.name}</button>
            <button onClick={() => setSelectedPet(null)}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
