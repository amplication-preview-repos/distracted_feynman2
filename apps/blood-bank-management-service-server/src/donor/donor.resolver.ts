import * as graphql from "@nestjs/graphql";
import { DonorResolverBase } from "./base/donor.resolver.base";
import { Donor } from "./base/Donor";
import { DonorService } from "./donor.service";

@graphql.Resolver(() => Donor)
export class DonorResolver extends DonorResolverBase {
  constructor(protected readonly service: DonorService) {
    super(service);
  }
}
