/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BloodBank } from "./BloodBank";
import { BloodBankCountArgs } from "./BloodBankCountArgs";
import { BloodBankFindManyArgs } from "./BloodBankFindManyArgs";
import { BloodBankFindUniqueArgs } from "./BloodBankFindUniqueArgs";
import { CreateBloodBankArgs } from "./CreateBloodBankArgs";
import { UpdateBloodBankArgs } from "./UpdateBloodBankArgs";
import { DeleteBloodBankArgs } from "./DeleteBloodBankArgs";
import { BloodBankService } from "../bloodBank.service";
@graphql.Resolver(() => BloodBank)
export class BloodBankResolverBase {
  constructor(protected readonly service: BloodBankService) {}

  async _bloodBanksMeta(
    @graphql.Args() args: BloodBankCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BloodBank])
  async bloodBanks(
    @graphql.Args() args: BloodBankFindManyArgs
  ): Promise<BloodBank[]> {
    return this.service.bloodBanks(args);
  }

  @graphql.Query(() => BloodBank, { nullable: true })
  async bloodBank(
    @graphql.Args() args: BloodBankFindUniqueArgs
  ): Promise<BloodBank | null> {
    const result = await this.service.bloodBank(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BloodBank)
  async createBloodBank(
    @graphql.Args() args: CreateBloodBankArgs
  ): Promise<BloodBank> {
    return await this.service.createBloodBank({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BloodBank)
  async updateBloodBank(
    @graphql.Args() args: UpdateBloodBankArgs
  ): Promise<BloodBank | null> {
    try {
      return await this.service.updateBloodBank({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BloodBank)
  async deleteBloodBank(
    @graphql.Args() args: DeleteBloodBankArgs
  ): Promise<BloodBank | null> {
    try {
      return await this.service.deleteBloodBank(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
