"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupWhereInput_1 = require("../../../inputs/Customer_groupWhereInput");
let DeleteManyCustomer_groupArgs = class DeleteManyCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereInput_1.Customer_groupWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereInput_1.Customer_groupWhereInput)
], DeleteManyCustomer_groupArgs.prototype, "where", void 0);
DeleteManyCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCustomer_groupArgs);
exports.DeleteManyCustomer_groupArgs = DeleteManyCustomer_groupArgs;
