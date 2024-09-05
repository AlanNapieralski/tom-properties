'use client'
import AboutUs from "./components/AboutUs"
import Dashboard from "./components/Dashboard"
import Drawer from "./components/Drawer"
import Nav from "./components/shared/Nav"
import Welcome from "./components/Welcome"
import ContactUs from "./components/ContactUs"
import Footer from "./components/shared/Footer"
import SideNav from './components/SideNav'
import { Button } from "@/components/ui/button"

export default function Home() {

  return (
    <>
      <SideNav
        triggerButton={
          <Button
            className="absolute inset-y-0 right-0"
          >
            Open
          </Button>
        }
      />
    </>
  );
}
