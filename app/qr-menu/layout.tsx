export default function QRMenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Menu | Chumley's Doghouse</title>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #1C1A17; color: #F5ECD7; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.6; }
          .font-display { font-family: Georgia, 'Times New Roman', serif; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
