import { vacancies } from "./db";

export default function getVacancyById(id) {
  return vacancies.find((vacancy) => vacancy.id === id);
}
