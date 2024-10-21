import { type } from "os";

export type User = {
  /**
   * Id generata dal database
   */
  _id: string;

  /**
   * name
   */
  firstName: string;

  /**
   * surname
   */
  lastName: string;
  email: string;
  password: string;
  create_at: string;
  update_at: string;
  role: Role;
  image?: string;


  /**
   * Rappresenta i corsi assegnati a un docente. 
   * Questa proprietà non è
   * valorizzata solo per i "role" teacher
   */
  subjects?: string[];

  /**
   * rappresenta le classi assegnate
   * a un docente. è valorizzata solo per i "role" teacher
   */
  classes?: string[];

  /**
   * rappresenta le classi assegnate
   * a uno studente. è valorizzata solo per i "role" teacher
   */
  student_class?: string;

};

export type Role = "admin" | "student" | "teacher"