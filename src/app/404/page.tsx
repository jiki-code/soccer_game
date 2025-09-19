export default function Error404() {
  return (
   <div className="flex flex-col items-center justify-center min-h-[75vh] px-6 py-12">
     <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-center max-w-2xl text-[var(--foreground)]/80">
       Sorry, the page you are looking for does not exist.
     </p>
   </div>
  );
}
