import React from 'react';

const MainPage = () => {

  const shoes = [
    { id: 1, name: 'Running Shoes', image: '/nike.webp' },
    { id: 2, name: 'Casual Sneakers', image: '/jordan1.jpg' },
    { id: 3, name: 'Formal Shoes', image: '/formal.avif' },
    { id: 4, name: 'basketball shoes', image: '/kobe5.jpg' },
  ];

  return (
    <div className="font-serif">
     
     <div
        className="h-screen bg-cover bg-center"
          style={{ backgroundImage: 'url(/background.jpg)' }}
>
        <section className="h-full flex items-center justify-center text-white text-center py-12 bg-opacity-60 bg-stone">
        < div>
            <h1 className="text-8xl text-green-600 font-bold">Shoe Shop</h1>
            <p className="text-6xl text-green-600  font-bold">Find your perfect pair of shoes today!</p>
          </div>
        </section>
      </div>




    
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="border-2 shadow-lg p-4 rounded-lg text-center">
            <img src={shoe.image} alt={shoe.name} className="w-full h-60 object-cover mb-4" />
            <h3 className="font-semibold text-2xl">{shoe.name}</h3>
            <p className="text-xl">{shoe.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MainPage;
