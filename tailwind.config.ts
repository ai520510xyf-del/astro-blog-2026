import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        surface: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-aurora': 'linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)',
        'gradient-sunset': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f64f59 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        'gradient-holographic': 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96c93d, #f9d56e, #ff6b6b)',
        'gradient-vaporwave': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'gradient-neon': 'linear-gradient(45deg, #00ff87, #60efff, #ff6b6b, #feca57)',
        'gradient-cyberpunk': 'linear-gradient(135deg, #f7971e 0%, #ffd200 50%, #f7971e 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-lg': '0 0 40px rgba(14, 165, 233, 0.4)',
        'glow-accent': '0 0 20px rgba(217, 70, 239, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(14, 165, 233, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 5px theme(colors.primary.400), 0 0 20px theme(colors.primary.600)',
        'neon-accent': '0 0 5px theme(colors.accent.400), 0 0 20px theme(colors.accent.600)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 0 32px 0 rgba(31, 38, 135, 0.37)',
        'floating': '0 10px 40px -10px rgba(0, 0, 0, 0.3)',
        'morphing': '0 0 40px rgba(14, 165, 233, 0.4), 0 20px 60px rgba(217, 70, 239, 0.3)',
        'spotlight': '0 0 60px rgba(14, 165, 233, 0.2)',
        'spotlight-accent': '0 0 60px rgba(217, 70, 239, 0.2)',
        'ambient': '0 0 100px rgba(14, 165, 233, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-out': 'fadeOut 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'gradient-x': 'gradientX 3s ease infinite',
        'gradient-y': 'gradientY 3s ease infinite',
        'gradient-xy': 'gradientXY 4s ease infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'border-dance': 'borderDance 1s linear infinite',
        'scale-in': 'scaleIn 0.3s ease-out',
        'scale-out': 'scaleOut 0.3s ease-in',
        'tilt': 'tilt 10s linear infinite',
        'rotate-y': 'rotateY 20s linear infinite',
        'particle-float': 'particleFloat 10s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'stagger-1': 'stagger 0.5s ease-in-out infinite',
        'stagger-2': 'stagger 0.6s ease-in-out infinite',
        'stagger-3': 'stagger 0.7s ease-in-out infinite',
        'blur-in': 'blurIn 0.5s ease-out',
        'blur-out': 'blurOut 0.5s ease-in',
        'zoom-in': 'zoomIn 0.4s ease-out',
        'zoom-out': 'zoomOut 0.4s ease-in',
        'flip': 'flip 0.8s ease-in-out',
        'magnetic': 'magnetic 0.3s ease-out',
        'ripple': 'ripple 1.5s ease-in-out',
        'wave': 'wave 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'parallax': 'parallax 2s ease-out',
        'morph': 'morph 8s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 2s ease-in-out infinite',
        'text-shimmer': 'textShimmer 2s linear infinite',
        'card-entrance': 'cardEntrance 0.6s ease-out',
        'image-reveal': 'imageReveal 1s ease-out',
        'scroll-reveal': 'scrollReveal 0.8s ease-out',
        'slide-entrance': 'slideEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-entrance': 'scaleEntrance 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'rotate-entrance': 'rotateEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(14, 165, 233, 0.5)',
            transform: 'scale(1.02)',
          },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientY: {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        gradientXY: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 2px currentColor)' },
          '50%': { filter: 'brightness(1.2) drop-shadow(0 0 8px currentColor)' },
        },
        borderDance: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotateY(-5deg) rotateX(5deg)' },
          '50%': { transform: 'rotateY(5deg) rotateX(-5deg)' },
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        particleFloat: {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '0.3',
          },
          '25%': { 
            transform: 'translate(10px, -10px) rotate(90deg)',
            opacity: '0.6',
          },
          '50%': { 
            transform: 'translate(0, -20px) rotate(180deg)',
            opacity: '0.3',
          },
          '75%': { 
            transform: 'translate(-10px, -10px) rotate(270deg)',
            opacity: '0.6',
          },
        },
        sparkle: {
          '0%, 100%': { 
            transform: 'scale(0) rotate(0deg)',
            opacity: '0',
          },
          '50%': { 
            transform: 'scale(1) rotate(180deg)',
            opacity: '1',
          },
        },
        stagger: {
          '0%, 100%': { 
            transform: 'translateX(0)',
            opacity: '1',
          },
          '50%': { 
            transform: 'translateX(-10px)',
            opacity: '0.7',
          },
        },
        blurIn: {
          '0%': { 
            filter: 'blur(10px)',
            opacity: '0',
          },
          '100%': { 
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        blurOut: {
          '0%': { 
            filter: 'blur(0)',
            opacity: '1',
          },
          '100%': { 
            filter: 'blur(10px)',
            opacity: '0',
          },
        },
        zoomIn: {
          '0%': { 
            transform: 'scale(0.8)',
            opacity: '0',
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        zoomOut: {
          '0%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': { 
            transform: 'scale(0.8)',
            opacity: '0',
          },
        },
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        ripple: {
          '0%': { 
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': { 
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        wave: {
          '0%, 100%': { 
            transform: 'translateY(0)',
          },
          '50%': { 
            transform: 'translateY(-10px)',
          },
        },
        orbit: {
          '0%': { 
            transform: 'rotate(0deg) translateX(150px) rotate(0deg)',
          },
          '100%': { 
            transform: 'rotate(360deg) translateX(150px) rotate(-360deg)',
          },
        },
        parallax: {
          '0%': { 
            transform: 'translateY(0)',
          },
          '100%': { 
            transform: 'translateY(-20px)',
          },
        },
        morph: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': { 
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { 
            opacity: '1',
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
          '20%, 24%, 55%': { 
            opacity: '0.5',
            textShadow: 'none',
          },
        },
        textShimmer: {
          '0%': { 
            backgroundPosition: '0% 50%',
          },
          '100%': { 
            backgroundPosition: '200% 50%',
          },
        },
        cardEntrance: {
          '0%': { 
            transform: 'translateY(50px) scale(0.9)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateY(0) scale(1)',
            opacity: '1',
          },
        },
        imageReveal: {
          '0%': { 
            clipPath: 'inset(0 0 100% 0)',
          },
          '100%': { 
            clipPath: 'inset(0 0 0 0)',
          },
        },
        scrollReveal: {
          '0%': { 
            transform: 'translateY(100px)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideEntrance: {
          '0%': { 
            transform: 'translateX(-100px)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        scaleEntrance: {
          '0%': { 
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        rotateEntrance: {
          '0%': { 
            transform: 'rotate(-180deg) scale(0.5)',
            opacity: '0',
          },
          '100%': { 
            transform: 'rotate(0) scale(1)',
            opacity: '1',
          },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snap': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        'dramatic': 'cubic-bezier(0.8, 0, 0.2, 1)',
        'gentle': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'bouncy': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '4000': '4000ms',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
} satisfies Config;
