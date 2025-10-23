import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AnimationTest from "./pages/AnimationTest";
import FontStretchTest from "./pages/FontStretchTest";
import FontTest from "./pages/FontTest";
import HomeRelume from "./pages/HomeRelume";
import About from "./pages/About";
import Community from "./pages/Community";
import CreatorKit from "./pages/CreatorKit";
import Crusader from "./pages/Crusader";
import DailyLessons from "./pages/DailyLessons";
import Divisions from "./pages/Divisions";
import Elevator from "./pages/Elevator";
import Faq from "./pages/Faq";
import Glossary from "./pages/Glossary";
import HowItWorks from "./pages/HowItWorks";
import Leaderboard from "./pages/Leaderboard";
import Learn from "./pages/Learn";
import PlayerSpotlights from "./pages/PlayerSpotlights";
import Podcast from "./pages/Podcast";
import Raider from "./pages/Raider";
import RewardsUserStatus from "./pages/RewardsUserStatus";
import Schedule from "./pages/Schedule";
import SingleGlossaryTermPage from "./pages/SingleGlossaryTermPage";
import SingleLessonPage from "./pages/SingleLessonPage";
import Tournaments from "./pages/Tournaments";
import TradingAccountsTickets from "./pages/TradingAccountsTickets";
import VerificationKyc from "./pages/VerificationKyc";

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path={"/"} component={Home} />
       <Route path="/animation-test" component={AnimationTest} />
      <Route path="/font-stretch-test" component={FontStretchTest} />
      <Route path={"/font-test"} component={FontTest} />
      <Route path={"/relume"} component={HomeRelume} />
      
      {/* How It Works */}
      <Route path={"/how-it-works"} component={HowItWorks} />
      <Route path={"/verification/kyc"} component={VerificationKyc} />
      <Route path={"/trading-accounts-tickets"} component={TradingAccountsTickets} />
      <Route path={"/rewards-user-status"} component={RewardsUserStatus} />
      
      {/* Divisions */}
      <Route path={"/divisions"} component={Divisions} />
      <Route path={"/elevator"} component={Elevator} />
      <Route path={"/crusader"} component={Crusader} />
      <Route path={"/raider"} component={Raider} />
      
      {/* Tournaments */}
      <Route path={"/tournaments"} component={Tournaments} />
      <Route path={"/schedule"} component={Schedule} />
      <Route path={"/leaderboard"} component={Leaderboard} />
      <Route path={"/creator-kit"} component={CreatorKit} />
      
      {/* Learn */}
      <Route path={"/learn"} component={Learn} />
      <Route path={"/daily-lessons"} component={DailyLessons} />
      <Route path={"/glossary"} component={Glossary} />
      <Route path={"/glossary/:term"} component={SingleGlossaryTermPage} />
      <Route path={"/lesson/:id"} component={SingleLessonPage} />
      
      {/* Community */}
      <Route path={"/community"} component={Community} />
      <Route path={"/podcast"} component={Podcast} />
      <Route path={"/player-spotlights"} component={PlayerSpotlights} />
      
      {/* About */}
      <Route path={"/about"} component={About} />
      <Route path={"/faq"} component={Faq} />
      
      {/* 404 */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

