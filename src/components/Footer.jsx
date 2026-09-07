import { BouquetAccent } from './Bouquet'

export function Footer() {
  return (
    <footer style={{
      padding: '80px 24px 120px',
      background: '#f5f3f0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 400,
          color: '#1a1a1a',
          marginBottom: '24px',
          lineHeight: 1.2
        }}>
          Let's create something beautiful
        </h2>
        
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#666',
          marginBottom: '32px'
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
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#1a1a1a',
            padding: '18px 40px',
            border: '1px solid #1a1a1a',
            transition: 'all 0.3s ease',
            marginBottom: '40px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#1a1a1a'
            e.target.style.color = '#faf9f7'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.color = '#1a1a1a'
          }}
        >
          DM to Book
        </a>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          <a 
            href="https://instagram.com/weddingsbytamanna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#666',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#1a1a1a'}
            onMouseLeave={(e) => e.target.style.color = '#666'}
          >
            Instagram
          </a>
          <a 
            href="https://tiktok.com/@weddingsbytamanna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#666',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#1a1a1a'}
            onMouseLeave={(e) => e.target.style.color = '#666'}
          >
            TikTok
          </a>
        </div>

        <div style={{
          marginTop: '60px',
          paddingTop: '32px',
          borderTop: '1px solid #e5e0d8',
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          color: '#999',
          letterSpacing: '1px'
        }}>
          © {new Date().getFullYear()} Weddings by Tamanna
        </div>
      </div>

      {/* Subtle bouquet accent */}
      <BouquetAccent />
    </footer>
  )
}
