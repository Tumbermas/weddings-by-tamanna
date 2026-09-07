export function Footer() {
  return (
    <footer style={{
      padding: '120px 24px 80px',
      background: '#1a1614',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle burgundy accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(to right, transparent, rgba(180, 140, 120, 0.4), transparent)'
      }} />

      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Section marker */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '9px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#ad9f96',
          marginBottom: '32px',
          fontWeight: 300
        }}>
          03 / Enquire
        </p>

        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 300,
          color: '#fffaf5',
          marginBottom: '16px',
          lineHeight: 1.3,
          fontStyle: 'italic'
        }}>
          Let's create something beautiful
        </h2>
        
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: '#ad9f96',
          marginBottom: '40px',
          fontWeight: 300,
          lineHeight: 1.8
        }}>
          Now booking for 2024/2025
        </p>

        <a 
          href="https://instagram.com/weddingsbytamanna"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#fffaf5',
            padding: '18px 40px',
            border: '1px solid rgba(234, 221, 212, 0.4)',
            transition: 'all 0.4s ease',
            marginBottom: '48px',
            background: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(180, 140, 120, 0.15)'
            e.target.style.borderColor = 'rgba(180, 140, 120, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.borderColor = 'rgba(234, 221, 212, 0.4)'
          }}
        >
          DM to Book
        </a>

        {/* Social links */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          <a 
            href="https://instagram.com/weddingsbytamanna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#ad9f96',
              transition: 'color 0.3s ease',
              fontWeight: 300
            }}
            onMouseEnter={(e) => e.target.style.color = '#eaddd4'}
            onMouseLeave={(e) => e.target.style.color = '#ad9f96'}
          >
            Instagram
          </a>
          <a 
            href="https://tiktok.com/@weddingsbytamanna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#ad9f96',
              transition: 'color 0.3s ease',
              fontWeight: 300
            }}
            onMouseEnter={(e) => e.target.style.color = '#eaddd4'}
            onMouseLeave={(e) => e.target.style.color = '#ad9f96'}
          >
            TikTok
          </a>
        </div>

        {/* Copyright */}
        <div style={{
          paddingTop: '40px',
          borderTop: '1px solid rgba(173, 159, 150, 0.15)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          color: '#6b5d52',
          letterSpacing: '1.5px'
        }}>
          © {new Date().getFullYear()} Weddings by Tamanna
        </div>
      </div>
    </footer>
  )
}
