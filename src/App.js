
import './App.css';

function App() {
  return (
    
    <div className="App">
      <h1 className="text-4xl font-bold p-6">
        UI Sensor for Fast Charging
      </h1>

      <div className="max-w-3xl flex mx-auto justify-between">
        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">RUNNING TIME</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>

        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">CLOCK TIME</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>

        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">STATUS</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>
      </div>

      <div className="m-5 max-w-3xl flex mx-auto justify-between">
        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">VOLTAGE</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>

        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">CURRENT</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>

        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">POWER</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>
      </div>

      <div className="m-5 max-w-3xl flex mx-auto justify-between">
        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">ENERGY</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>

        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">CELL TEMPERATURE</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>

        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">CYCLE</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>
      </div>

      <div className="m-5 max-w-3xl flex mx-auto justify-between">
        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">Running Time</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>

        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">Running Time</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>

        <div class="p-4 bg-orange-100 rounded-xl shadow-xl">
          <div class='p-4'>
            <div class="font-medium text-black">Running Time</div>
            <p class="text-slate-500">00:00:00</p>
          </div>        
        </div>
      </div>

    </div>
  );
}

export default App;
