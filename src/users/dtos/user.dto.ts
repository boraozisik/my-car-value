import { Expose, Exclude } from 'class-transformer'; // Expose means show this feature and exclude means dont show this feature.

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
