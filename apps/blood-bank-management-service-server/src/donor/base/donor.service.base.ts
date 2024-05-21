/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Donor as PrismaDonor,
  Donation as PrismaDonation,
} from "@prisma/client";

export class DonorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DonorCountArgs, "select">): Promise<number> {
    return this.prisma.donor.count(args);
  }

  async donors<T extends Prisma.DonorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DonorFindManyArgs>
  ): Promise<PrismaDonor[]> {
    return this.prisma.donor.findMany<Prisma.DonorFindManyArgs>(args);
  }
  async donor<T extends Prisma.DonorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DonorFindUniqueArgs>
  ): Promise<PrismaDonor | null> {
    return this.prisma.donor.findUnique(args);
  }
  async createDonor<T extends Prisma.DonorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DonorCreateArgs>
  ): Promise<PrismaDonor> {
    return this.prisma.donor.create<T>(args);
  }
  async updateDonor<T extends Prisma.DonorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DonorUpdateArgs>
  ): Promise<PrismaDonor> {
    return this.prisma.donor.update<T>(args);
  }
  async deleteDonor<T extends Prisma.DonorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DonorDeleteArgs>
  ): Promise<PrismaDonor> {
    return this.prisma.donor.delete(args);
  }

  async findDonations(
    parentId: string,
    args: Prisma.DonationFindManyArgs
  ): Promise<PrismaDonation[]> {
    return this.prisma.donor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .donations(args);
  }
}
