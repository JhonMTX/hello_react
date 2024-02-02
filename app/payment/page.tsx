import StepsTitles from '@/components/steps-titles';
import { Button } from '@sanservices/brands-ui';

export default function Payment() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16 px-4 sm:p-24 md:py-24">
      <StepsTitles title="Review & Payment">
        <p>
          You will be able to add special requests and comments once the booking
          is completed.
        </p>
      </StepsTitles>
      <Button content="CONTINUE" />
    </main>
  );
}
