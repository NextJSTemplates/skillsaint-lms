const Copyright = () => {
  return (
    <div className="border-t border-t-gray-800 py-6">
      <div className="container">
        <div className="flex flex-col items-center">
          <p className="max-w-146.5 text-center text-xs leading-4.5 tracking-base text-gray-500">
            © Skillsaint {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
