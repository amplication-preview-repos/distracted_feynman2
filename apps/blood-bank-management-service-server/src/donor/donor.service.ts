import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DonorServiceBase } from "./base/donor.service.base";

@Injectable()
export class DonorService extends DonorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
