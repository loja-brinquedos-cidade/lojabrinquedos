import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <header class="flex items-center justify-between px-8 py-4 bg-slate-950 border-b border-slate-800 shadow-2xl">
          <h1 class="text-2xl font-black tracking-wider text-white">
              LOJA <span class="bg-gradient from-[#ff9a55] via-[#ffea6c] to-[#54fffb] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(84,255,251,0.3)]">DE BRINQUEDOS</span>
          </h1>
          <nav>
              <ul class="flex items-center gap-6">
                  <li>
                      <a href="#" class="relative font-semibold text-slate-300 transition-all duration-300 hover:text-[#89ffcc] hover:drop-shadow-[0_0_8px_rgba(137,255,204,0.6)]">
                          Home
                      </a>
                  </li>
              </ul>
          </nav>
      </header>
  )
}
