export default function GridLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="max-w-6xl mx-auto h-full px-6 relative">
        {/* The two main vertical pillars */}
        <div className="absolute left-0 top-0 bottom-0 border-l border-dashed border-gray-200" />
        <div className="absolute right-0 top-0 bottom-0 border-r border-dashed border-gray-200" />
        
        {/* Optional: Add more columns if needed to match the 'Eric' style which looks like it has 3 columns */}
        <div className="absolute left-1/3 top-0 bottom-0 border-l border-dashed border-gray-200/50" />
        <div className="absolute left-2/3 top-0 bottom-0 border-r border-dashed border-gray-200/50" />
      </div>
    </div>
  );
}
