export interface Transfer {
  id?: number | string;
  value: number;
  receiver: string;
  data?: Date;
}
