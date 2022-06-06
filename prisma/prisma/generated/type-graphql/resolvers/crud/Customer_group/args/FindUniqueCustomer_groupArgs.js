"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupWhereUniqueInput_1 = require("../../../inputs/Customer_groupWhereUniqueInput");
let FindUniqueCustomer_groupArgs = class FindUniqueCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], FindUniqueCustomer_groupArgs.prototype, "where", void 0);
FindUniqueCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCustomer_groupArgs);
exports.FindUniqueCustomer_groupArgs = FindUniqueCustomer_groupArgs;
