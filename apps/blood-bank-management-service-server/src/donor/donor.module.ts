import { Module } from "@nestjs/common";
import { DonorModuleBase } from "./base/donor.module.base";
import { DonorService } from "./donor.service";
import { DonorController } from "./donor.controller";
import { DonorResolver } from "./donor.resolver";

@Module({
  imports: [DonorModuleBase],
  controllers: [DonorController],
  providers: [DonorService, DonorResolver],
  exports: [DonorService],
})
export class DonorModule {}
