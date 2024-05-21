import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BloodBankService } from "./bloodBank.service";
import { BloodBankControllerBase } from "./base/bloodBank.controller.base";

@swagger.ApiTags("bloodBanks")
@common.Controller("bloodBanks")
export class BloodBankController extends BloodBankControllerBase {
  constructor(protected readonly service: BloodBankService) {
    super(service);
  }
}
