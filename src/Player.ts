class Player
{
  public id: number;

  public money: number;

  public sector: Sector;

  public get availableWarps: Sector[]
  {
    return [];
  }

  public isWarpAvailable(sectorId: number): boolean {
    return;
  }

  public move(sectorId: number): void
  {
    return;
  }
}
