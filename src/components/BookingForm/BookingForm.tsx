interface BookingFormProps {
  camperId: string;
}

function BookingForm({ camperId }: BookingFormProps) {
  return <div>BookingForm {camperId}</div>;
}
export default BookingForm;
