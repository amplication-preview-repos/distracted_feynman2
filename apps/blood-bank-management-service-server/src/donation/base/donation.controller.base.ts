/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DonationService } from "../donation.service";
import { DonationCreateInput } from "./DonationCreateInput";
import { Donation } from "./Donation";
import { DonationFindManyArgs } from "./DonationFindManyArgs";
import { DonationWhereUniqueInput } from "./DonationWhereUniqueInput";
import { DonationUpdateInput } from "./DonationUpdateInput";

export class DonationControllerBase {
  constructor(protected readonly service: DonationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Donation })
  async createDonation(
    @common.Body() data: DonationCreateInput
  ): Promise<Donation> {
    return await this.service.createDonation({
      data: {
        ...data,

        bloodRequest: data.bloodRequest
          ? {
              connect: data.bloodRequest,
            }
          : undefined,

        donor: data.donor
          ? {
              connect: data.donor,
            }
          : undefined,
      },
      select: {
        bloodRequest: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        donationDate: true,

        donor: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Donation] })
  @ApiNestedQuery(DonationFindManyArgs)
  async donations(@common.Req() request: Request): Promise<Donation[]> {
    const args = plainToClass(DonationFindManyArgs, request.query);
    return this.service.donations({
      ...args,
      select: {
        bloodRequest: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        donationDate: true,

        donor: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Donation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async donation(
    @common.Param() params: DonationWhereUniqueInput
  ): Promise<Donation | null> {
    const result = await this.service.donation({
      where: params,
      select: {
        bloodRequest: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        donationDate: true,

        donor: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Donation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDonation(
    @common.Param() params: DonationWhereUniqueInput,
    @common.Body() data: DonationUpdateInput
  ): Promise<Donation | null> {
    try {
      return await this.service.updateDonation({
        where: params,
        data: {
          ...data,

          bloodRequest: data.bloodRequest
            ? {
                connect: data.bloodRequest,
              }
            : undefined,

          donor: data.donor
            ? {
                connect: data.donor,
              }
            : undefined,
        },
        select: {
          bloodRequest: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          donationDate: true,

          donor: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Donation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDonation(
    @common.Param() params: DonationWhereUniqueInput
  ): Promise<Donation | null> {
    try {
      return await this.service.deleteDonation({
        where: params,
        select: {
          bloodRequest: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          donationDate: true,

          donor: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
