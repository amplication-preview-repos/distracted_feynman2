import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BloodBankServiceBase } from "./base/bloodBank.service.base";

@Injectable()
export class BloodBankService extends BloodBankServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
