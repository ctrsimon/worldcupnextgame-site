import { StaticPage } from "@/components/layout/StaticPage";
export default function PrivacyPage() {
  return (
    <StaticPage eyebrow="Legal" title="Privacy">
      <p>This site stores an optional timezone preference only in your browser. It does not require an account.</p>
      <p>Google AdSense is used on selected pages to display advertising. Google may use cookies or similar identifiers to serve and measure ads, and consent controls may be shown for visitors in the EEA, UK, and Switzerland.</p>
      <p>For details about how Google uses advertising data, review Google&apos;s AdSense and privacy documentation.</p>
    </StaticPage>
  );
}
