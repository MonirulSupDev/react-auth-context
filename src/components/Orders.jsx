const Orders = () => {
  return (
    <div className="w-full min-h-[70vh] bg-rose-100 flex justify-center items-center flex-col p-4">
      <h2 className="text-3xl font-bold">Your personal order history</h2>
      <ul className="mt-4 list-disc list-inside">
        <li>Item 01</li>
        <li>Item 02</li>
        <li>Item 03</li>
        <li>Item 04</li>
        <li>Item 05</li>
      </ul>
    </div>
  );
};

export default Orders;
