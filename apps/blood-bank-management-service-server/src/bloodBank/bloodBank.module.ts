import { Module } from "@nestjs/common";
import { BloodBankModuleBase } from "./base/bloodBank.module.base";
import { BloodBankService } from "./bloodBank.service";
import { BloodBankController } from "./bloodBank.controller";
import { BloodBankResolver } from "./bloodBank.resolver";

@Module({
  imports: [BloodBankModuleBase],
  controllers: [BloodBankController],
  providers: [BloodBankService, BloodBankResolver],
  exports: [BloodBankService],
})
export class BloodBankModule {}
