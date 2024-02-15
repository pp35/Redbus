import React from 'react';

function BusBookingForm() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <div className="flex justify-between p-6 border-b">
          <div>
            <h2 className="text-lg font-semibold">IntrCity Smart Bus</h2>
            <div className="flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 w-5 h-5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="ml-1 text-sm text-yellow-600">4.5</span>
              <span className="mx-2 text-sm text-gray-500">|</span>
              <span className="text-sm text-gray-500">24 Seats Left</span>
              <span className="mx-2 text-sm text-gray-500">|</span>
              <span className="text-sm text-gray-500">8 windows left</span>
            </div>
            <div className="flex space-x-8 mt-4">
              <div>
                <p className="text-sm font-medium">22:45, 16 NOV</p>
                <p className="text-sm text-gray-500">Pune</p>
                <p className="text-sm text-gray-500">Taxi Stand, Chitranjan Road</p>
              </div>
              <div>
                <p className="text-sm font-medium">07 hrs 59 min</p>
                <div className="w-10 h-1 bg-gray-200 rounded-full mt-2"></div>
              </div>
              <div>
                <p className="text-sm font-medium">06:20, 17 NOV</p>
                <p className="text-sm text-gray-500">Rajbhush | Kolkata</p>
                <p className="text-sm text-gray-500">Taxi Stand, Chitranjan Road</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-lg font-semibold">Fare Details</h3>
            <div className="flex flex-col items-end mt-1">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Base Fare</span>
                <span className="font-medium">₹ 799</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-500 mr-2">Tax</span>
                <span className="font-medium">₹ 150</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-500 mr-2">Offer applied</span>
                <span className="font-medium">₹ 50</span>
              </div>
              <div className="flex items-center mt-4">
                <span className="text-sm text-gray-500 mr-2">Total Price</span>
                <span className="font-medium text-lg">₹ 899</span>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4">Proceed To Payment</button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Enter Traveller Details</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium">Passenger 1 - Seat 16</h4>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Name" />
              <button type="button" role="combobox" aria-controls="radix-:r6:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="gender">
                <span style={{ pointerEvents: 'none' }}>Gender</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-50" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <select aria-hidden="true" tabIndex="-1" style={{ position: 'absolute', border: '0px', width: '1px', height: '1px', padding: '0px', margin: '-1px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', whiteSpace: 'nowrap', overflowWrap: 'normal' }}>
                <option value=""></option>
              </select>
              <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Age (in yrs)" />
              <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Email ID" />
              <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Mobile No" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusBookingForm;
