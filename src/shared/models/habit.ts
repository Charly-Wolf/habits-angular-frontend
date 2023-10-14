export default class Habit {
  constructor(
    // public id: number,
    public habitText: string,
    public isDone: boolean = false,
    public isArchived: boolean = false
  ) {}
}
