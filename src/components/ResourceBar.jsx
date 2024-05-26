import React from 'react';

const ResourceBar = ({ resources, setResources }) => {
  const addResource = () => {
    const newResource = `Resource ${String.fromCharCode('A'.charCodeAt(0) + resources.length)}`;
    setResources([...resources, newResource]);
  };

  return (
    <div className="resource-bar bg-gray-50 p-4 col-span-1 border-r">
      {resources.map(resource => (
        <div key={resource} className="resource p-2 border-b">{resource}</div>
      ))}
      <button onClick={addResource} className="mt-2 p-2 bg-blue-500 text-white rounded">Add Resource</button>
    </div>
  );
};

export default ResourceBar;
