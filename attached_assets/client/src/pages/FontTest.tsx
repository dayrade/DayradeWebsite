export default function FontTest() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 space-y-12">
      <h1 className="text-6xl font-bold text-center">Font Width Test</h1>
      
      <div className="space-y-8 max-w-4xl">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Width: 50 (Ultra Condensed)</p>
          <h2 
            className="text-5xl font-bold uppercase"
            style={{ 
              fontFamily: "'Roboto Flex', sans-serif",
              fontVariationSettings: "'wdth' 50, 'wght' 700"
            }}
          >
            YOUR PATH TO TRADING MASTERY
          </h2>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">Width: 100 (Normal)</p>
          <h2 
            className="text-5xl font-bold uppercase"
            style={{ 
              fontFamily: "'Roboto Flex', sans-serif",
              fontVariationSettings: "'wdth' 100, 'wght' 700"
            }}
          >
            YOUR PATH TO TRADING MASTERY
          </h2>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">Width: 150 (Ultra Expanded)</p>
          <h2 
            className="text-5xl font-bold uppercase"
            style={{ 
              fontFamily: "'Roboto Flex', sans-serif",
              fontVariationSettings: "'wdth' 150, 'wght' 700"
            }}
          >
            YOUR PATH TO TRADING MASTERY
          </h2>
        </div>

        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">Mixed widths in one line:</p>
          <h2 className="text-5xl font-bold uppercase">
            <span style={{ 
              fontFamily: "'Roboto Flex', sans-serif",
              fontVariationSettings: "'wdth' 50, 'wght' 700"
            }}>
              YOUR PATH TO
            </span>
            {" "}
            <span style={{ 
              fontFamily: "'Roboto Flex', sans-serif",
              fontVariationSettings: "'wdth' 100, 'wght' 700"
            }}>
              TRADING
            </span>
            {" "}
            <span style={{ 
              fontFamily: "'Roboto Flex', sans-serif",
              fontVariationSettings: "'wdth' 150, 'wght' 900"
            }}>
              MASTERY
            </span>
          </h2>
        </div>
      </div>

      <p className="text-muted-foreground text-center max-w-2xl">
        If you can see different widths between the three headings above, 
        the Anybody variable font is working correctly. The first should be narrow, 
        the second normal, and the third wide.
      </p>
    </div>
  );
}

