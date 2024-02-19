export interface IStore {
  id?: number,
  name: string,
}

export interface IModelStore {
  findByAll(): Promise<IStore[] | null>,
  findById(id: number): Promise<IStore | null>,
  createStore(store: IStore): Promise<void>,
  updateStore(newDtaUser: IStore, id: number): Promise<void>,
  delete(id: number): Promise<void>
}
