import Queue from "../models/Queue";
import User from "../models/User";

interface SerializedUser {
  id: number;
  name: string;
  email: string;
  profile: string;
  customer: string;
  queues: Queue[];
}

export const SerializeUser = (user: User): SerializedUser => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    profile: user.profile,
    customer: user.customer,
    queues: user.queues
  };
};
