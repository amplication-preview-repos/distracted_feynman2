import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DonorService } from "./donor.service";
import { DonorControllerBase } from "./base/donor.controller.base";

@swagger.ApiTags("donors")
@common.Controller("donors")
export class DonorController extends DonorControllerBase {
  constructor(protected readonly service: DonorService) {
    super(service);
  }
}
