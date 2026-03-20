import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0a0010 0%, #1a0030 50%, #0a0010 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background radial glow */}
        <div
          style={{
            position: 'absolute',
            width: '700px',
            height: '700px',
            background:
              'radial-gradient(circle, rgba(179,71,255,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '-100px',
          }}
        />

        {/* Corner sparkles */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '60px',
            fontSize: '48px',
            opacity: 0.6,
          }}
        >
          ✨
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            fontSize: '48px',
            opacity: 0.6,
          }}
        >
          ✨
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            position: 'relative',
          }}
        >
          {/* Emoji row */}
          <div style={{ fontSize: '80px', letterSpacing: '0.2em' }}>
            🎀 ✨ 🔮
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '96px',
              fontWeight: 900,
              color: '#b347ff',
              letterSpacing: '0.08em',
              textShadow: '0 0 60px rgba(179,71,255,0.9), 0 0 120px rgba(179,71,255,0.4)',
              lineHeight: 1,
            }}
          >
            ANYA FORGER
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '30px',
              color: '#e0b8ff',
              letterSpacing: '0.25em',
              opacity: 0.85,
              marginTop: '4px',
            }}
          >
            Secret Esper · Eden Academy
          </div>

          {/* Bottom tag */}
          <div
            style={{
              marginTop: '8px',
              padding: '8px 28px',
              border: '1px solid rgba(179,71,255,0.5)',
              borderRadius: '999px',
              color: '#b347ff',
              fontSize: '20px',
              letterSpacing: '0.15em',
            }}
          >
            ● WAKU WAKU MODE ACTIVE
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
