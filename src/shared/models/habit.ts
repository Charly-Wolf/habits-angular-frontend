export default class Habit {
  constructor(
    public id: any,
    public habitText: string,
    public isDone: boolean = false,
    public isArchived: boolean = false
  ) {}
}
