import EditVacation from '@/components/edit-vacation';
import StepsTitles from '@/components/steps-titles';
import { Button } from '@sanservices/brands-ui';

export default function Guests() {
  /** NOTE: this variables are temporal ones all of them maybe will be removed in the future. **/
  /** change these values with the values of the resort that was previously selected in the vacation step. **/
  const rstName = 'Sandals Montego Bay';
  const rstCountry = 'JAMAICA'.toLowerCase(); // because the country value is in uppercase.
  const rstCity = 'Montego Bay';

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between py-16 px-4 sm:p-24 md:py-24">
        <StepsTitles title="Guest Information">
          <p>
            Traveling to {rstName} at {rstCity},{' '}
            <span className="capitalize">{rstCountry}</span>
          </p>
        </StepsTitles>
        <Button content="continue" />
      </main>
    </>
  );
}
