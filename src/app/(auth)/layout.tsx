interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      {children}
    </div>
  );
}
