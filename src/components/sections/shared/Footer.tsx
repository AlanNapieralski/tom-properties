import Image from "next/image"
import { fullTitle, description } from "@/models/site-metadata"

export default function Footer({ className = "" }) {
  return (
    <>
      <footer className={"relative flex justify-around items-center bg-primary text-secondary px-4 sm:px-10 py-10 z-50 " + className}>
        <div className="footer grid-flow-col justify-center gap-8 sm:gap-16">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a href="/landlords" className="link link-hover">For Landlords</a>
            <a href="tenants" className="link link-hover">For tenants</a>
            <a href="investors" className="link link-hover">For investors</a>
            <a href="value-my-property" className="link link-hover">Value my Property</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a href="/#about-us" className="link link-hover">About us</a>
            <a href="/#contact-us" className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a href="terms-of-use" className="link link-hover">Terms of use</a>
            <a href="privacy-policy" className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        <Image
          src='/assets/logo.png'
          alt='logo'
          width={360}
          height={360}
          className={`hidden md:block absolute right-10 h-16 w-auto`}
        />
      </footer>
      <footer className="footer bg-primary text-secondary border-base-300 border-t px-4 sm:px-10 py-4">
        <aside className="flex flex-col-reverse sm:flex-row-reverse justify-between gap-8 lg:gap-0 lg:grid lg:grid-cols-4 items-center w-full">
          <nav className="place-self-center justify-self-start">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <p className="lg:col-start-2 lg:col-span-2 lg:justify-self-center">
            {fullTitle}
            <br />
            {description}
          </p>
        </aside>
      </footer>
    </>
  )
}
