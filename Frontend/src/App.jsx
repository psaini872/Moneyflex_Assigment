import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';
import { useState } from 'react';
import Img from './images/pexels-elina-fairytale-3822668.jpeg';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [mounth, setMounth] = useState('');
  const [timing, setTiming] = useState(0);

  // const [formdata, setFormdata] = useState({ name: '', email: ''});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: name,
      email: email,
      age: Number(age),
      sex: 'male',
      mounth: Number(mounth),
      timing: timing,
      startDate: new Date(),
    };
    console.log(body);
    try {
      await axios.post('/api/v1/user', body);
    } catch (err) {
      console.log(err);
    }

    alert(`Successfully enrolled for ${mounth}`);
    setName('');
    setEmail('');
    setAge('');
    setMounth('');
    setTiming(0);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex bg-[#ccebc1]">
        <div className="w-2/5 p-4 h-[100vh] flex justify-center">
          <img
            src={Img}
            alt="Yoga"
            className="w-auto h-full rounded-lg shadow-md "
          />
        </div>
        <div className="w-3/5 py-10 flex justify-center">
          <div className="w-[50%]">
            <h2 className="text-2xl font-bold mb-4 text-green-900">Namaste</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md text-green-900 py-2 px-3 focus:outline-none focus:border-green-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  id="Age"
                  name="Age"
                  placeholder="Age Range: 18-65"
                  min={18}
                  max={65}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-1/2 border border-gray-300 rounded-md text-green-900 py-2 px-3 focus:outline-none focus:border-green-400"
                  required
                />
              </div>
              <h1>Select Your Timing</h1>
              <div className="flex mb-4">
                <button
                  className={`border-gray-400 hover:bg-green-600 px-4 py-2 bg-white rounded-lg text-sm ${
                    timing === 1 ? 'bg-green-600' : ''
                  }`}
                  type="button"
                  onClick={(e) => {
                    setTiming(1);
                  }}
                >
                  6AM - 7AM
                </button>
                <button
                  className={`border-gray-400 hover:bg-green-600 px-4 py-2 bg-white rounded-lg text-sm ${
                    timing === 2 ? 'bg-green-600' : ''
                  }`}
                  type="button"
                  onClick={(e) => {
                    setTiming(2);
                  }}
                >
                  7AM - 8AM
                </button>
                <button
                  className={`border-gray-400 hover:bg-green-600 px-4 py-2 bg-white rounded-lg text-sm ${
                    timing === 3 ? 'bg-green-600' : ''
                  }`}
                  type="button"
                  onClick={(e) => {
                    setTiming(3);
                  }}
                >
                  8AM - 9AM
                </button>
                <button
                  className={`border-gray-400 hover:bg-green-600 px-4 py-2 bg-white rounded-lg text-sm ${
                    timing === 4 ? 'bg-green-600' : ''
                  }`}
                  type="button"
                  onClick={(e) => {
                    setTiming(4);
                  }}
                >
                  5PM - 6PM
                </button>
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  id="mounth"
                  name="mounth"
                  placeholder="No of Mounths"
                  min={1}
                  value={mounth}
                  onChange={(e) => setMounth(e.target.value)}
                  className="w-1/2 border border-gray-300 rounded-md text-green-900 py-2 px-3 focus:outline-none focus:border-green-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-green-900 text-white py-2 px-10 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Book Class
              </button>
              <p>Already Enrolled, See your Yoga Class</p>
            </form>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
