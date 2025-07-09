export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-4">
        {/* Address */}
        <div className="text-left text-gray-500 text-sm leading-tight mb-4 md:mb-0">
          <div className="font-semibold">CUBO</div>
          <div>Rua Casa do Ator, 919</div>
          <div>04546-003 - São Paulo - SP</div>
        </div>
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#3b5998' }}>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          {/* Google+ */}
          <a href="#" aria-label="Google+" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#dd4b39' }}>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.805 10.023h-9.765v3.955h5.627c-.229 1.229-1.373 3.614-5.627 3.614-3.389 0-6.146-2.805-6.146-6.266s2.757-6.266 6.146-6.266c1.93 0 3.221.822 3.963 1.532l2.707-2.633C16.146 2.805 13.963 1.5 11.5 1.5 5.701 1.5 1 6.201 1 12s4.701 10.5 10.5 10.5c6.045 0 10.5-4.229 10.5-10.5 0-.701-.078-1.229-.195-1.977z" />
            </svg>
          </a>
          {/* Twitter */}
          <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#00acee' }}>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#c4302b' }}>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
} 