interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: string;
}

export default IAppointment;
