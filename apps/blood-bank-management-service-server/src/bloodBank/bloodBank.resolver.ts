import * as graphql from "@nestjs/graphql";
import { BloodBankResolverBase } from "./base/bloodBank.resolver.base";
import { BloodBank } from "./base/BloodBank";
import { BloodBankService } from "./bloodBank.service";

@graphql.Resolver(() => BloodBank)
export class BloodBankResolver extends BloodBankResolverBase {
  constructor(protected readonly service: BloodBankService) {
    super(service);
  }
}
