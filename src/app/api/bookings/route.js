import Booking from '@/models/Booking.js';
import sequelize from '@/lib/database.js';

export async function POST(req) {
  const { orderNumber, fullName, phone, email, packageName, people, unitPrice, total, journeyStart } = await req.json();

  try {
    await sequelize.authenticate(); // Ensure the connection is established
    console.log({ orderNumber, fullName, phone, email, packageName, people, unitPrice, total, journeyStart });
    
    const booking = await Booking.create({
      orderNumber, 
      fullName,
      phone,
      email,
      packageName,
      people,
      unitPrice,
      total,
      journeyStart,
    });

    return new Response(JSON.stringify(booking), { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return new Response(JSON.stringify({ error: 'Error creating booking' }), { status: 500 });
  }
}

export async function GET(req) {
  // Uncomment the following lines if you want to use orderNumber for fetching specific bookings
  const { searchParams } = new URL(req.url);
  const orderNumber = searchParams.get('orderNumber'); // Get orderNumber from query parameters
  console.log('Fetching booking with orderNumber:', orderNumber);

  try {
    await sequelize.authenticate(); // Ensure the connection is established

    if (orderNumber) {
      const booking = await Booking.findOne({ where: { orderNumber } }); // Find booking by orderNumber
      if (booking) {
        return new Response(JSON.stringify(booking), { status: 200 });
      } else {
        return new Response(JSON.stringify({ error: 'Booking not found' }), { status: 404 });
      }
    } else {
      const bookings = await Booking.findAll(); // Get all bookings if no orderNumber is provided
      return new Response(JSON.stringify(bookings), { status: 200 });
    }
    
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return new Response(JSON.stringify({ error: 'Error fetching bookings' }), { status: 500 });
  }
}