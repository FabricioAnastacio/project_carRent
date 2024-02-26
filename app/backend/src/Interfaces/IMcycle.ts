export interface IMcycle {
  id?: number,
  concessionaireId: number;
  model: string,
  brand: string,
  cc: number,
  capacity: number,
  image: string | undefined,
  description: string,
  price: number
}

export interface IMcycleModel {
  findAllMcycle(): Promise<IMcycle[] | null>,
  findById(id: number): Promise<IMcycle | null>,
  AddMcycle(mcycle: IMcycle): Promise<IMcycle>,
  updateMcycle(newMcycle: IMcycle, id: number): Promise<void>,
  deleteMcycle(id: number): Promise<void>
}
