export default function Card({ children, className }) {
    return (
      <div className={`bg-violet shadow-md rounded-lg p-4`}>
        {children}
      </div>
    );
  }
  