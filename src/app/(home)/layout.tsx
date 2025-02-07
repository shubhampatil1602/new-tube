import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";

interface PageProps {
  children: React.ReactNode;
}

const Layout = ({ children }: PageProps) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default Layout;
